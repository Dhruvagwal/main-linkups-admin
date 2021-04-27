import color from '../../asset/styles/color'
import {Dimensions} from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const styles =  {
    TextInput:{
        padding:5,
        height:50,
        borderBottomColor:color.white,
        borderBottomWidth:1,
        fontSize:20,
        color:color.white,
        width:'100%',
    },
    SignUp:{
        alignSelf:'center',
        opacity:0.7,
        fontSize:16,
        color:color.white
    },
    heading:{
        position:'absolute',
        top:150,
        fontSize:35,
        alignSelf:'center',
        marginBottom:20,
        textTransform:'uppercase',
        fontWeight:'600',
        letterSpacing:2,
        fontWeight:'700',
        opacity:0.75,
        color:color.white
    },
    SubmitButton:{
        height:50,
        justifyContent: 'center',
        width:'25%',
        alignSelf:'center',
        marginRight:20,
        borderRadius:5,
        backgroundColor:'#713cf5'
    },
    buttonText:{
        color:color.gray,
        fontSize:18,
        letterSpacing:2,
        alignSelf:'center',
        fontWeight:'700'
    },
    Container:{
        flex:1,
        backgroundColor:color.Background
    },
    Form:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignSelf:'center',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderWidth:0,
        elevation:20,
        height:HEIGHT/5,
        justifyContent:'center'
    },
    icon:{
        borderWidth:2,
        padding:5,
        borderRadius:100,
        borderColor:color.white
    },
    holder:{
        flexDirection:'row', 
        alignItems:'center',
        marginHorizontal:20, 
        justifyContent:'space-between',
    }
}

export default styles

