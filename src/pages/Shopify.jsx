import React, { useEffect, useState } from 'react'
import { useRef } from 'react'


function Products({data,proclick}){
    return (
        <>
        {data.map((p,i)=>{
            return(
                <div className="projects" onClick={()=>proclick(p.id)} key={p.id} id={p.id} data-id={p.id}>
                    <div className="hover">
                        <img src={p.image?.src} alt={p.image?.alt} />
                        <h3>{p.title}</h3>
                    </div>
                </div>
            )
        })}
        </>
    )
}


function Preview({product,setproduct,page,preview}){
  useEffect(()=>{
      document.body.style.overflow='hidden'
      preview.classList.add('slide')
      page.classList.add('slideleft')
    return ()=>{
      document.body.style.overflow='visible'
      preview.classList.remove('slide')
      page.classList.remove('slideleft')
      setTimeout(()=>{page?.classList?.remove('in')},500)
    }
  },[page,preview])

  if(product===''){
    return <></>
  }else{
    return (
      <>
        <div className="product" data-id={product.id}>
          <div className="view">
            <img src={product.image?.src} alt="product" />
          </div>
          <div className="title">
            <h2 dangerouslySetInnerHTML={{__html:product.title}} ></h2>
            <div className="con">
              <button className='btn close_btn' onClick={() => setproduct(false)}><i className="fa-regular fa-circle-xmark"></i>Close</button>
            </div>
          </div>
          <br />
          <div className="pdetails">
            <p dangerouslySetInnerHTML={{__html: "<span class='pdetails_heading'>Price: </span>$" + product.variants[0].price }}></p>
            <p className="p_description" dangerouslySetInnerHTML={{__html: "<span class='pdetails_heading'>Description: </span>" + product.body_html }}></p>
            <div className="title">
              <div className="con">
                <button className='btn buy_btn' onClick={() => setproduct(false)}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const Shopify = () => {
    const [data,setData] = useState([])
    const [product,setproduct]=useState(false);
    const preview=useRef();
    const page=useRef();
    function proclick (id) {
      setproduct(data.find(product=>product.id===id));
    }
    useEffect(() => {       
       fetch("https://targetconstruction.ca/new/curl11.php", { 
         method: "GET",
         headers: {
          "Content-Type":"application/json"
         }
       })
       .then((res)=>res.json())
       .then((data)=>
        setData(data.products.filter(p=>p.status==='active'))
        
       )
       .catch(e=>console.error(e))
    }, []);


  return (
    <>
      <div ref={page} className="portfolio container">
        <h2 className='products_heading'>MY SHOPIFY STORE'S PRODUCTS</h2>
        <p className='containerr'>Using the Shopify API, I fetched and displayed products directly from my store within my portfolio.</p>
        <div className="all">
          <Products data={data} proclick={proclick} />
        </div>
        {
          (data.length === 0) && 
          <>
          <div className='loading_spinner spinner-icon'>
              
          </div>
          </>
        }
        {
          product && <div className="div" onClick={() => setproduct(false)} ></div>
        }
      </div>
      <div ref={preview} className="preview">
        {
          product &&
          <Preview product={product} setproduct={setproduct} page={page.current} preview={preview.current} />
        }
      </div>
    </>
  )
}

export default Shopify
