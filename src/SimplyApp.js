import React, {useState} from 'react';
import './components/css/SimplyApp.less';
import { Layout } from 'antd'
import { AppHeader } from './components/AppHeader'
import { AppContent } from './components/AppContent'
import { BarList } from './components/BarList'
import 'antd/dist/antd.less'
import { Results } from './components/Results';
const {Content, Footer} = Layout

function SimplyApp(){
    const [searchQuery, setSearchQuery] = useState({query:"", type:""})
    const [resultsState, setResultsState] = useState([])
    const [metricState, setMetricState] = useState(false)
    const [isSearching, setSearching] = useState(false)
    const [recipe, setRecipe] = useState ({title: '' , img: '', summary: ''})
    const [recipeID, setRecipeID] = useState(-1)
    const [totalResults, setTotalState] = useState(0)
    const [instructions, setInstructions] = useState([])
    const [ingredients, setIngred] = useState([]) 
    const [popularData, setPopularData] = useState([]) 
    const [exploreData, setExploreData] = useState([]) 

    function onPageChange(page, pageSize){
        if(resultsState.length < 1 ) return
        let offset = page * pageSize
        if (offset % 100 === 0){
            while(offset > resultsState.length){
                searchRecipies(searchQuery.query, searchQuery.type,  resultsState.length)
            }
            searchRecipies(searchQuery.query, searchQuery.type, offset)
        }  
    }
    //Switch between US measurement system and Metric measurement system
    const toggleUnits = (bool) => {
        setMetricState(bool)
    }

    //Get recipie information and display in app content
    function handleChangeSelected(id){
        console.log('Menu Log: Recipie selected, id' + {id})
        setRecipeID(id)
        getRecipe(id)
    }

    //Search for recipies using a query
    const searchRecipies = (input, type, offset, num, sort) => {
        setSearching(true)
        setSearchQuery({query:input, type:type})
        setExploreData([])

        fetch(encodeSearch(input, type, offset, num, sort))
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }else
                return res.json()
            })
            .then((data) => {
                offset ? setResultsState(prev => [...prev , ...data.results]) : setResultsState(data.results)
                setTotalState(data.totalResults)
            }).catch((error) => {
                console.log(error)
            })
    }

    const getPopularData = (input, type, offset) => {
        fetch(encodeSearch(input, type, offset, 6))
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }else
                return res.json()
            })
            .then((data) => {
                setPopularData(data.results)
            }).catch((error) => {
                console.log(error)
            })
    }

    
    const getExploreData = (input, type, offset) => {
        fetch(encodeSearch(input, type, offset, 10,"random"))
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }else
                return res.json()
            })
            .then((data) => {
                setExploreData(data.results)
            }).catch((error) => {
                console.log(error)
            })
    }

    const getType = (input, type) => {
        setSearching(true)
        setSearchQuery({query:input, type:type})
        fetch(encodeSearch(input, type))
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }else
                return res.json()
            })
            .then((data) => {
                setResultsState(data.results)
                setTotalState(data.totalResults)
            }).catch((error) => {
                console.log(error)
            })
    }

    const encodeSearch = (query = "", type="", offset="", num="100", sort="popularity") =>{
        let request = "https://api.spoonacular.com/recipes/complexSearch?apiKey=93b09acd5a44410d87094660a3bfb7ff&addRecipeNutrition=true&sort="
            + sort +"&number=" 
            + num + "&instructionsRequired=true&query=" 
            + query +"&offset=" 
            + offset +"&type=" 
            + type
        return request
    }

    const encodeID = (id) =>{
        let request = 'https://api.spoonacular.com/recipes/' + id + '/information?apiKey=93b09acd5a44410d87094660a3bfb7ff'
        console.log(request)
        return request
    }

    const getRecipe = (id) => {
        console.log('API Log: fetching recipie')
        fetch(encodeID(id))
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }else
            return res.json()
        }).then((data) => {
            let instructions = data.analyzedInstructions 
            let ingred = data.extendedIngredients
            instructions = instructions[0]
            instructions = instructions.steps

            setRecipe(data)
            setInstructions(instructions)
            setIngred(ingred)
            console.log('API Log: Successful GET')
        })
        .catch((error) => {console.log(error)})
        setSearching(false)
    }

    function returnHome(){
        setRecipeID(-1)
        setSearching(false)
    }
    return (
        <div className="app">
        <AppHeader 
            toggleUnits={toggleUnits}
            onSearch={searchRecipies} 
            returnHome={returnHome}
            setResults={setResultsState}
            />
        <Layout className='layout-body'>
                <BarList
                    getType={getType}
                    onSearch={searchRecipies}
                    setResultsState={setResultsState}
                    />

                <Content className='content'>
                    {
                        isSearching ? 
                            <Results 
                                results={resultsState}
                                totalResults={totalResults} 
                                onSelectChange={handleChangeSelected} 
                                onPageChange={onPageChange}/> 
                            : 
                            <AppContent
                                ID={recipeID}
                                recipe={recipe}
                                instructions={instructions}
                                ingred={ingredients}
                                useMetric={metricState}
                                popularData={popularData}
                                getPopularData={getPopularData}
                                exploreData={exploreData}
                                getExploreData={getExploreData}
                                onSearch={searchRecipies}
                                onSelectChange={handleChangeSelected}
                                />
                    }
                </Content>
                <Footer style={{ textAlign: 'center', color: 'white', zIndex: 1}}>
                    Using Ant Design 2020 Created by Dushane Smith
                </Footer>
        </Layout>
        </div>
    );
}
export default SimplyApp
