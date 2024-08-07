// Format timestamp and separate date and time

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2); // Add 1 to month because months are zero-based
    let day = ('0' + date.getDate()).slice(-2);
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let seconds = ('0' + date.getSeconds()).slice(-2);

    return [year + '-' + month + '-' + day, hours + ':' + minutes + ':' + seconds];
}

export default formatDate;
