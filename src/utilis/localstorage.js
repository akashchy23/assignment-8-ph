// function for call from localStorage
export const handleLoadApps = () => {

    const apps =JSON.parse( localStorage.getItem("app"))
    return apps?  apps : []
    
}

// function for add to local storage
export const handleAddtoLocal = (app) => {
    const existingApps = handleLoadApps()
    
    let newApps = [...existingApps,app]
    localStorage.setItem("app", JSON.stringify(newApps))
}