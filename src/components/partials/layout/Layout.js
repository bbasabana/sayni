import React from 'react';
import Menu from '../menu/Menu';
import Header from '../Header';
import CardView from '../CardView';

const Layout = (props) => {
    return (
        <div className="flex md:flex-row-reverse flex-wrap home-container">
            <div className="w-full md:w-3/4 bg-gray-500 p-4 text-gray-200 left-home">
              <Header/>
              <div className="load-component mt-20 p-6">
                  <div className="flex mb-4">
                      <div className="w-1/2 h-12">
                       {props.children}
                      </div>
                      <CardView/>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 bg-gray-400 p-4 text-gray-700 right-home">
              <Menu {...props}/>
            </div>
        </div>
    )
}

export default Layout;