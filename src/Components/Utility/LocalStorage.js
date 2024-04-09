import toast from 'react-hot-toast'
// Get Data
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return []
}

// Save
const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
        toast.success('Added Successfully!')
    } else {
        return toast.error('Already Added!')
    }
};
export { saveJobApplication, getStoredJobApplication };
