import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CloakContext } from './Cloak';
import { keccak256 } from 'ethers/lib/utils.js';
import EllipticCurve from 'elliptic';
import { AiOutlineCopy } from "react-icons/ai";
// import tronWeb from 'tronweb';
import { GiKangaroo } from "react-icons/gi";
import { AiOutlineArrowsAlt } from "react-icons/ai";
const ec = new EllipticCurve.ec('secp256k1');



const Receive = () => {


  const  data  = useContext(CloakContext);
  const [rootspendingkey, setrootspendingkey] = useState('')
  const [privatekey, setprivatekey] = useState('')
  const [hide, sethide] = useState(true)
  const [matching, setmatchingkey] = useState(false)
  const [err, seterr] = useState(false)
  const [reveal, setreveal] = useState(false)


  const generaterootspendingkey = () => {

    setmatchingkey(true)
    // console.log(localStorage.getItem('myKey'))

    var Spendingkey;
    // if (rootspendingkey === null) {
      // const mystoredspendingkey = localStorage.getItem('myKey');
      Spendingkey = ec.keyFromPrivate(localStorage.getItem('myKey'), 'hex');
   
    // }

    // else{
    //   Spendingkey = ec.keyFromPrivate(rootspendingkey, 'hex');
    // }



    var ephPublicKey;
    var RSharedsecret;
    var RHashedsecret;
    var _sharedSecret;

    data.registry.forEach((z) => {

      ephPublicKey = ec.keyFromPublic(z.slice(5), 'hex');
      RSharedsecret = Spendingkey.derive(ephPublicKey.getPublic()); // 
      RHashedsecret = ec.keyFromPrivate(keccak256(RSharedsecret.toArray()));
      _sharedSecret = '0xT' + RSharedsecret.toArray()[0].toString(16).padStart(2, '0')

      if (_sharedSecret.toString() === z.slice(0, 5).toString()) {
        const _key = Spendingkey.getPrivate().add(RHashedsecret.getPrivate());
        const pk = _key.mod(ec.curve.n);
        console.log('Private key to open wallet', pk.toString(16, 32))
        setprivatekey(pk.toString(16, 32))
        setreveal(true)

      }

      return 


    })
    setmatchingkey(false)
 

  }

  const copykey = () => {
    navigator.clipboard.writeText(privatekey)
  }

  return (
    <>

      {hide !== true &&

        <input style={{ border: '1px solid red' }}
          type='text'
          value={rootspendingkey}
          onChange={(e) => { setrootspendingkey(e.target.value) }}
          placeholder='Rootkey (optional)'
        />
      }

      {/* expand icon (toggle of input button) */}
      <AiOutlineArrowsAlt size={30} onClick={() => sethide(!hide)} />


      <p>Match Key</p>
      <GiKangaroo size={40} onClick={generaterootspendingkey} color='red' />

      {matching === true ? <p>Running</p> : false}

      {reveal=== true ?
        <>
          <p>CopyPrivateKey</p>
          <AiOutlineCopy size={40} onClick={copykey} />
        </> :
        <p>{err}</p>

      }



    </>
  )
}

export default Receive