import React from 'react';
import './components/css/SimplyApp.less';
import { Layout } from 'antd'
import { AppHeader } from './components/AppHeader'
import { AppSider } from './components/AppSider'
import { AppContent } from './components/AppContent'
import 'antd/dist/antd.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      loadingResults: true,
      results: [],
      recipe: {'title': '',
                'img': '',
              'summary': ''},
      selectedRecipe: -1,
      metric: false
    }
  }

  render(){
    return (
      <div className="app">
        <AppHeader unitFunc={(bool) => this.toggleUnits(bool)}/>
        <Layout className='layout-body'>
          <AppSider 
            results={this.state.results}
            totalResults={this.state.totalResults}
            onSelectChange={(id) => this.handleChangeSelected(id)} 
            onSearch={(query) => this.searchRecipies(query)}
            loading={this.state.loadingResults}/>
          <AppContent 
            ID={this.state.selectedRecipe} 
            recipe={this.state.recipe} 
            instructions={this.state.instructions} 
            ingred={this.state.ingred}
            useMetric={this.state.metric}/>
        </Layout>
      </div>
    );
  }

  //Switch between US measurement system and Metric measurement system
  toggleUnits(bool){
    this.setState({metric: bool})
  }

  //Search for recipies using a query
  searchRecipies(input){
    this.setState({loadingResults: false})
    this.setState ({results : []})
    this.setState({totalResults: 0})

    fetch(this.encodeSearch(input))
    .then(res => res.json())
    .then((data) => {
        this.setState({loadingResults: true})
        this.setState ({results : data['results']})
        this.setState({totalResults: data['totalResults']})
    })
    .catch(console.log)
  }

  encodeSearch = (query) =>{
    let request = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=93b09acd5a44410d87094660a3bfb7ff&sort=popularity&number=25&instructionsRequired=true&query=' + query
    console.log(request)
    return request
  }

//Get recipie information and display in app content
  handleChangeSelected(id) {
    console.log('Menu Log: Recipie selected, id' + {id})
    this.setState({selectedRecipe: id})
    this.getRecipe(id)
  }

  getRecipe(id){
    console.log('API Log: fetching recipie')
    fetch(this.encodeID(id))
    .then(res => res.json())
    .then((data) => {
      //TODO: rather confusing without context, looking for a better way while also avoiding a another api call
        var instructions = data['analyzedInstructions']
        instructions = instructions[0]
        instructions = instructions['steps']

        var ingred = data['extendedIngredients']

        this.setState ({recipe : data,
        instructions: instructions,
        ingred: ingred})
        console.log('API Log: Successful GET')
    })
    .catch(console.log('API Log: error')
    )
}

  encodeID = (id) =>{
      let request = 'https://api.spoonacular.com/recipes/' + id + '/information?apiKey=93b09acd5a44410d87094660a3bfb7ff'
      console.log(request)
      return request
  }
}

export default App;
