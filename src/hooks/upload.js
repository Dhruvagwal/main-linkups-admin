import firebase from '../../firebase'

const getLocalPath = async (uri) => {
  const response = await fetch(uri);
  return response.blob();
}

const upload = (blob, className,acc)=>{
  return firebase.storage().ref(`/${className}`).child(`/${acc}`).put(blob)
};

const getLink = async (uploadTask) => {
  return uploadTask
    .then((snapshot) => snapshot.ref.getDownloadURL());
}
export {getLink, getLocalPath}
export default upload