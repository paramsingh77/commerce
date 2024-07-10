const sessionIdToUserMap = new Map();


function setUser(id,user){
    sessionIdToUserMap.set(id,user);
}

function getUser(id){
    return new Promise((resolve)=>{
        resolve(sessionIdToUserMap.get(id));
    });
}

module.exports = {
    setUser,
    getUser,
}