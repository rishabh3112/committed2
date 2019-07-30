import React, { Component, createContext } from 'react';
import THEMES from '../constants/themes';

export const AppContext = createContext();

export class AppProvider extends Component {
    state = {
        theme: THEMES[0],
        sidebarOpen: false,
        calendarModalOpen: false
    }

    appOperations = {
        setTheme: (themeId) => this.setState({ theme: THEMES.find(theme => theme.id === themeId) }),
        setSidebarOpen: (sidebarOpen) => this.setState({ sidebarOpen }),
        setCalendarModalOpen: (calendarModalOpen) => this.setState({ calendarModalOpen }),
    }

    render(){
        return (
            <AppContext.Provider value={{
                ...this.state,
                ...this.appOperations
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}