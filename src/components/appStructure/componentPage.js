import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/action';
import HideShow from '../examples/exampleHideShow';
import Contructor from '../examples/constructorFunc';
import Buttons from '../examples/exampleButton';
import InputForm from '../examples/exampleInputForm';
import InputOnClick from '../examples/exampleInputOnClick';
import Textbox from '../examples/exampleTextbox';
import SliderBar from '../examples/exampleSliderbar';
import NavBar from '../examples/exampleNavBar';
import Picture from '../examples/exampleImg';
import Dropdown from '../examples/exampleDropdown';
import Info from '../../containers/appStructure/info';
import Header from '../examples/exampleRouters';
import Footer from './Footer';
import ProgressBar from '../examples/exampleProgressBar';
import SelectedComponent from '../../containers/appStructure/selectedComponent';
import Calendar from '../DataPicker';

class ComponentPage extends Component {
  // <div className='componentBox'>
  //   <Calendar />
  //   <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleProgressBar.js' comp='progress_bar'/>
  // </div>

  renderFullPage() {
    //TODO: Build this correctly with React-Router
    return (
      <div>
        <Header />
        <div className='container main'>
        <h1 className='page-header headingtext'>Example of Useful Functions</h1>
          <div className='scrollbar'>
            <div className='componentBox'>
              <ProgressBar />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleProgressBar.js' comp='ProgressBar'/>
            </div>
            <div className='componentBox'>
              <NavBar />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleNavBar.js' comp='NavBar'/>
            </div>
            <div className='componentBox'>
              <HideShow/>
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleHideShow.js' comp='HideShow'/>
            </div>
            <div className='componentBox'>
              <Contructor />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/constructorFunc.js' comp="Contructor"/>
            </div>
            <div className='componentBox'>
              <Buttons />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleButton.js' comp="Buttons"/>
            </div>
            <div className='componentBox'>
              <InputForm />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleInputForm.js' comp="InputForm"/>
            </div>
            <div className='componentBox'>
              <InputOnClick />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleInputOnClick.js' comp="InputOnClick"/>
            </div>
            <div className='componentBox'>
              <Textbox />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleTextbox.js' comp="Textbox"/>
            </div>
            <div className='componentBox'>
              <SliderBar />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleSliderbar.js' comp="SliderBar"/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleSliderbar.js'/>
            </div>
            <div className='componentBox'>
              <Picture />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleImg.js' comp="Picture"/>
            </div>
            <div className='componentBox last'>
              <Dropdown />
              <Info github='https://github.com/Jguardado/ComponentBase/blob/master/src/components/examples/exampleDropdown.js' comp="Dropdown"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  renderSelectedComp() {
    return (
      <div>
        <Header />
        <div className='container main'>
        <h1 className='page-header headingtext'>Example of Useful Functions</h1>
          <SelectedComponent/>
        </div>
        <Footer />
      </div>
    );
  }

  render() {
    const { selected } = this.props;

    console.log('children: ', this.props);
    if (selected.selected) {
      return this.renderSelectedComp();

    } else {
      return this.renderFullPage();
    }
  }
}

//NOTE: state is currently read-only prop in this component
function mapStateToProps({ selected }) {
  return { selected: selected };
}

export default connect(mapStateToProps)(ComponentPage);
