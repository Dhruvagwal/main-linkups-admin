import firebase from '../../firebase'

const getLocalPath = async (uri)=>{
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob
}

const upload = async (blob, className,acc)=>{
  const ref = await firebase.storage().ref(`/${className}`).child(`/${acc}`).put(blob)
  console.log('trigger')
  console.log('ref', ref)
  return ref
};

const getLink = async (ref, className, acc)=>{
  await ref.on(
    "state_changed",
    (snapshot) => {},
    (err) => {
      console.log(err);
    },
    () => {
      storage
        .ref(`/${className}`)
        .child(`/${acc}`)
        .getDownloadURL()
        .then(async (url) => {
            // setURL(url)
            console.log(url)
            return url
        });
    }
  );
}
export {getLink, getLocalPath}
export default upload