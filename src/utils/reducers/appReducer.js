const appReducer = {
    toggleSideBar: (state) => {
        state.isSidebarOpen = !state.isSidebarOpen
    },
    selectedCategory: (state, action) => {
        state.category = action.payload
        state.newsCount = 10;
    },
    updateNewsCount: (state) => {
        state.newsCount += 10
    }
}

export default appReducer;