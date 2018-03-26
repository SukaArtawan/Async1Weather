import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const tempIcon = require('../icon/temp.png');
const mainIcon = require('../icon/main.png');
const sunriseIcon = require('../icon/sunrise.png');
const pressureIcon = require('../icon/pressure.png');
const seaIcon = require('../icon/sea.png');
const speedIcon = require('../icon/speed.png');
const descIcon = require('../icon/desc.png');
const sunsetIcon = require('../icon/sunset.png');
const humidityIcon = require('../icon/humidity.png');
const grounIcon = require('../icon/ground.png');

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    city: '',
      forecast: {
        main: '-',
         description: '-',
         temp: 0,
         sunrise: 0,
         sunset: 0,
         pressure: 0,
         humidity: 0,
         sea_level: 0,
         ground_level: 0,
         speed: 0,
    }
};
}
async getWeather() {

  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=9817054fa552a7600413c065c4e410cb&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        ground_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.boxHeader}>
          <Text style={styles.textHeader}>*Prakiraan Cuaca*</Text>
        </View>

        <View style={styles.boxSlider}>
          <Text style={styles.textContent}>Masukkan Nama Kota :</Text>
          <TextInput style = {styles.textTampilkan}
              placeholder="Masukkan Kota"
              onChangeText={(city)=>this.setState({city})}
          />
          <Button
            onPress={() => this.getWeather()}
            title="Tampilkan"
            accessibilityLabel="Klik Untuk Menampilkan"
          />
        </View>

        <View style={styles.boxContent}>

            <View style={styles.boxC1}>
              <View style={styles.boxC2}>
                <View style={styles.boxC4}>
                  <Image source={tempIcon} style={styles.icon}/>
                </View>
                <View style={styles.boxC3}>
                  <Text style={styles.textSlider}>Temp : {this.state.forecast.temp}</Text>
                </View>
              </View>

              <View style={styles.boxC2}>
              <View style={styles.boxC4}>
                <Image source={speedIcon} style={styles.icon}/>
              </View>
              <View style={styles.boxC3}>
                <Text style={styles.textSlider}>Wing_Speed : {this.state.forecast.speed}</Text>
              </View>
              </View>
            </View>

            <View style={styles.boxC1}>
              <View style={styles.boxC2}>
                <View style={styles.boxC4}>
                <Image source={mainIcon} style={styles.icon}/>
                </View>
            <View style={styles.boxC3}>
              <Text style={styles.textSlider}>Main : {this.state.forecast.main}</Text>
            </View>
            </View>

            <View style={styles.boxC2}>
            <View style={styles.boxC4}>
            <Image source={descIcon} style={styles.icon}/>
            </View>
            <View style={styles.boxC3}>
            <Text style={styles.textSlider}>Main_Desc : {this.state.forecast.description}</Text>
            </View>
            </View>
            </View>

            <View style={styles.boxC1}>
              <View style={styles.boxC2}>
                <View style={styles.boxC4}>
                  <Image source={sunriseIcon} style={styles.icon}/>
                </View>
                <View style={styles.boxC3}>
                  <Text style={styles.textSlider}>Sunrise : {this.state.forecast.sunrise}</Text>
                </View>
              </View>

              <View style={styles.boxC2}>
              <View style={styles.boxC4}>
                <Image source={sunriseIcon} style={styles.icon}/>
              </View>
              <View style={styles.boxC3}>
                <Text style={styles.textSlider}>Sunset : {this.state.forecast.sunset}</Text>
              </View>
              </View>
            </View>

            <View style={styles.boxC1}>
              <View style={styles.boxC2}>
                <View style={styles.boxC4}>
                <Image source={pressureIcon} style={styles.icon}/>
                </View>
                <View style={styles.boxC3}>
                  <Text style={styles.textSlider}>Pressure : {this.state.forecast.pressure}</Text>
                </View>
              </View>

              <View style={styles.boxC2}>
              <View style={styles.boxC4}>
              <Image source={humidityIcon} style={styles.icon}/>
              </View>
              <View style={styles.boxC3}>
                <Text style={styles.textSlider}>Humidity : {this.state.forecast.humidity}</Text>
              </View>
              </View>
            </View>

            <View style={styles.boxC1}>
              <View style={styles.boxC2}>
                <View style={styles.boxC4}>
                <Image source={seaIcon} style={styles.icon}/>
                </View>
                <View style={styles.boxC3}>
                  <Text style={styles.textSlider}>Sea_Level : {this.state.forecast.sea_level}</Text>
                </View>
              </View>

              <View style={styles.boxC2}>
              <View style={styles.boxC4}>
              <Image source={grounIcon} style={styles.icon}/>
              </View>
              <View style={styles.boxC3}>
                <Text style={styles.textSlider}>Ground_level : {this.state.forecast.ground_level}</Text>
              </View>
              </View>
            </View>


        </View>

        <View style={styles.boxFoot}>
          <Text style={styles.textFoot}>
          JaenKuliahdiPTI{'\n'}
          </Text>
          <Text style={styles.textFoot}>
          Copyright @Dante_Amaral
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex:1,
    backgroundColor: '#DCEDC8',
    flexDirection: 'column'
  },
  boxHeader: {
    flex: 1,
    backgroundColor: '#69F0AE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  boxSlider: {
    flex: 2,
    backgroundColor: '#81C784',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5
  },
  boxContent: {
    flex: 5,
    backgroundColor: '#69F0AE',
    flexDirection: 'column',
    //justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    padding: 5
  },
  boxC1:{
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },

  boxC2:{
    flex: 1,
    backgroundColor: 'green',
    flexDirection:'row',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  },
  boxC3:{
    flex:2,
    backgroundColor:'green'
  },
  boxC4:{
    flex:1,
    backgroundColor:'#CCFF90',
    justifyContent:'center',
    alignItems:'center'
  },

  boxFoot: {
    flex: 1,
    backgroundColor: '#00E676',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textHeader: {
    fontSize: 25,
    fontWeight:'bold',
    color: 'black'
  },
  textSlider: {
    fontSize: 10,
    color: 'black',
    flex: 1,
    padding: 10
  },
  textTampilkan:{
    height: 35,
    width: 150,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 20
  },
  textContent: {
    fontSize: 20,
    color: 'white',
    textAlign: 'justify'
  },
  textFoot: {
    fontSize: 13,
    color: 'black',
    fontWeight:'bold',
    //padding: 10
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    height: 50,
    width: 30
  }
});
