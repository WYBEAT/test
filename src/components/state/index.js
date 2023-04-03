import React, { Component } from 'react'
import Card from '../card'
import styles from '../../App.module.css'

// torol-tei ajilah function --> torol ni yu ch bj bolnoo



class State extends Component {
    state = {
        name:"PORNHUB.COM",
        zurag:"https://4.bp.blogspot.com/-xoHUpPNF-SI/WqJX5lTqXDI/AAAAAAAACnU/Xf8OouKS4zsc1WPdXfWI9Hle7BNw5IYrQCLcBGAs/s1600/mia-khalifa-age-wiki-latest-news-personal-life-biography-full-profile.jpg",

        type: true,
        number:824,
        und: undefined,
        null: null,
        arr: [
            {
                title:"test@gmail.com",
                des:"999999999",
                img: "https://4.bp.blogspot.com/-xoHUpPNF-SI/WqJX5lTqXDI/AAAAAAAACnU/Xf8OouKS4zsc1WPdXfWI9Hle7BNw5IYrQCLcBGAs/s1600/mia-khalifa-age-wiki-latest-news-personal-life-biography-full-profile.jpg",
                css: styles.box
            },
            {
                title:"test@gmail.com",
                des:"999999999",
                img: "https://4.bp.blogspot.com/-xoHUpPNF-SI/WqJX5lTqXDI/AAAAAAAACnU/Xf8OouKS4zsc1WPdXfWI9Hle7BNw5IYrQCLcBGAs/s1600/mia-khalifa-age-wiki-latest-news-personal-life-biography-full-profile.jpg",
                css: styles.box1
            },
            {
                title:"test@gmail.com",
                des:"999999999",
                img: "https://4.bp.blogspot.com/-xoHUpPNF-SI/WqJX5lTqXDI/AAAAAAAACnU/Xf8OouKS4zsc1WPdXfWI9Hle7BNw5IYrQCLcBGAs/s1600/mia-khalifa-age-wiki-latest-news-personal-life-biography-full-profile.jpg",
                css: styles.box2
            }
            
        
        ]
            }

    render(){
        console.log(this.state)
        return(
            <div className={styles.egg}>
                {this.state.arr.map((props) =>{
                    return(
                      <Card
                        title = {props.title}
                        des = {props.des}
                        img={props.img}
                        style={props.css}
                      />
                    )
                })}
            </div>
        )
    }
}

export default State
 