import { StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FEE715FF'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    height:250,
    width:'100%',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250,
   
  },
});

export default styles;
