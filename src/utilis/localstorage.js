import { toast } from "react-toastify"

// function for call from localStorage
export const handleLoadApps = () => {

    const apps =JSON.parse( localStorage.getItem("app"))
    return apps?  apps : []
    
}

// function for add to local storage
export const handleAddtoLocal = (app) => {
    const existingApps = handleLoadApps()
    const duplicateApps = existingApps.some(p=> p.id === app.id)
    if(duplicateApps) return toast('sorry it is already installed')
    let newApps = [...existingApps,app]
    localStorage.setItem("app", JSON.stringify(newApps))
    toast(`yahh!! ${app.title} Installed`)
}


// handleREmove from installation

export const handleRemoveApp=(id)=>{
   const existingApps = handleLoadApps()
   const updatedAppList = existingApps.filter(p=> p.id !== id)
    localStorage.setItem("app", JSON.stringify(updatedAppList))
}