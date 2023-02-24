import Head from "next/head";
import Axios from "axios";
import React,{useState} from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import ItemList from "../components/ItemList"
import {Header,Divider, Loader } from "semantic-ui-react";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading]= useState(true);
  
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  
  function getData(){
    Axios.get(API_URL)
    .then(res => {
      setList(res.data);
      setIsLoading(false); //로딩화면구현
    })
  }
  
  useEffect(()=>{
    getData();
  },[]);
  
  return( 
    <div>
      <Head>
        <title>HOME</title>
        <meta name="description" content="김초슬 홈입니다."></meta>
      </Head>
      {isLoading && (        
        <div style={{padding:"300px 0"}}>
          <Loader inline="centered" active>Loading...</Loader>
        </div>
      )
      }
      {!isLoading &&
        (
          <div>
            <Header as="h3" style={{paddingTop:40}}>베스트 상품</Header>
            <Divider/>
            <ItemList list={list.slice(0,9)}/>
            <Header as="h3" style={{paddingTop:40}}>신상품</Header>
            <Divider/>
            <ItemList list={list.slice(10)}/>
          </div>
        )}
    </div>
    
  );
}
