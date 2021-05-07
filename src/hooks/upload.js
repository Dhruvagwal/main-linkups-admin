import firebase from '../../firebase'

export async function UploadImage(uri, className,acc){
        console.log('trigger')
  const storage = firebase.storage();
  const response = await fetch(uri);
  const blob = await response.blob();
  var URL
  var ref = firebase.storage().ref(`/${className}`).child(`/${acc}`).put(blob);
  
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
          URL = await url
          console.log(url)
        });
    }
  );
  //return URL
};