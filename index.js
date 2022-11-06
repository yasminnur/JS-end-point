const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// endpoint "/test" dengan method GET
app.get("test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
        // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)

})

//--------------------------------------------------------------------------------------------

    // endpoint "/profil/nama/umur" dengan method GET 
app.get("/profil/:name/:age", (req, res) => {

    let name = req.params.name 
    let age = req.params.age

let response = {
    nama: name,
    umur: age
}

 res.json(response)
})

//=================================================================================================

//            COBA 3
// end-point "/bujur_sangkar" dengan method POST 
app.post("/bujur_sangkar", (req, res) => {
let panjang = Number(req.body.panjang) 
let lebar = Number(req.body.lebar) 

let luas = panjang * lebar
let keliling = 2 * (panjang + lebar)

let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling
}

res.json(response)
})

//===============================================================================================================

//                  TUPRAK 1
// end-point "KUBUS" dengan method POST 
app.post("/bangun_ruang/kubus", (req, res) => {
    let s = Number(req.body.s) 
    
    let luas_permukaan = 6*(s*s)
    let volume = s*s*s

    let response = {
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})

// end-point "BALOK" dengan method POST 
app.post("/bangun_ruang/balok", (req, res) => {
    let p = Number(req.body.p) 
    let l = Number(req.body.l)
    let t = Number(req.body.t) 
    
    let luas_permukaan = 2*((p*l)+(l*t)+(p*t))
    let volume = p*l*t

    let response = {
        p: p,
        l: l,
        t: t,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})
    
//----------------------------------------------------------------------------------------------------------

// end-point "PRISMA SEGITIGA" dengan method POST 
app.post("/bangun_ruang/prisma_segitiga", (req, res) => {
    let a = Number(req.body.a)
    let t = Number(req.body.t)
    let t2 = Number(req.body.t2) 
    
    let luas_permukaan = (3*t)*t2+2*(a*t/2)
    let volume = (a * t / 2) * t2
    
    let response = {
        a: a,
        t: t,
        t2: t2,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})
    
//----------------------------------------------------------------------------------------------------------

// end-point "LIMAS SEGIEMPAT" dengan method POST 
app.post("/bangun_ruang/limas_segiempat", (req, res) => {
    let s = Number(req.body.s) 
    let a = Number(req.body.a)
    let t = Number(req.body.t) 
    
    let luas_permukaan = (s*s)*4*(a*t/2)
    let volume = 1/3*(s*s)*t
    
    let response = {
        s: s,
        a: a,
        t: t,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    res.json(response)
})
    
//=============================================================================

//              TUPRAK 2

// end-point "CELCIUS" dengan method POST 
app.post("/suhu/celcius/:c", (req, res) => {
    let c = req.params.c 

    
    let konReamur = (4/5)*c
    let konFahrenheit = (9/5)*c+32
    let konKelvin =(c/1)+273
    
    let result= {
        konReamur,
        konFahrenheit,
        konKelvin
    }
    response = {
        celcius: c,
       result
    }
    
    res.json(response)
})

//----------------------------------------------------------------------------

// end-point "REAMUR" dengan method POST 
app.post("/suhu/reamur/:reamur", (req, res) => {
    let reamur = req.params.reamur 
    
    let konCelcius = (5/4)*reamur
    let konFahrenheit = (9/4)*reamur+32
    let konKelvin = (5/4)*reamur+273

    let response = {
        reamur: reamur,
        result: {
            celcius: konCelcius,
            fahrenheit: konFahrenheit,
            kelvin: konKelvin
        }
    }

    res.json(response)
})

//----------------------------------------------------------------------------

// end-point "FAHRENHEIT" dengan method POST 
app.post("/suhu/fahrenheit/:fahrenheit", (req, res) => {
    let fahrenheit = req.params.fahrenheit
    
    let konCelcius = 5/9*(fahrenheit-32)
    let konReamur = 4/9*(fahrenheit-32)
    let konKelvin = 5/9*(fahrenheit-32)+273

    let response = {
        fahrenheit:fahrenheit,
        result: {
            celcius: konCelcius,
            reamur: konReamur,
            kelvin: konKelvin
        }
    }

    res.json(response)
})

//-----------------------------------------------------------------------------------------

// end-point "KELVIN" dengan method POST 
app.post("/suhu/kelvin/:kelvin", (req, res) => {
    let kelvin = req.params.kelvin 
    
    let konCelcius = kelvin-273
    let konReamur = 4/5*(kelvin-273)
    let konFahrenheit = 9/5*(kelvin-273)+32
    
    let response = {
        kelvin: kelvin,
        result: {
            celcius: konCelcius,
            reamur: konReamur,
            Fahrenheit: konFahrenheit
        }
    }
    
    res.json(response)
})

//=========================================================================================

//              TUPRAK 3
// end-point "DESIMAL" dengan method POST 
app.post("/siskom/desimal", (req, res) => {

    let angka = Number(req.body.angka)
    
    let biner = angka.toString(2)
    let oktal = angka.toString(8)
    let heksa = angka.toString(16)
    

    let response = {
        biner: biner,
        oktal: oktal,
        heksa: heksa
    }
    

    res.json(response)
})

// end-point "BINER" dengan method POST 
app.post("/siskom/biner", (req, res) => {

    let angka = Number(req.body.angka)
    
    let desimal = parseInt(angka, 2);
    let oktal = parseInt(angka, 2).toString(8);
    let heksa = parseInt(angka, 2).toString(16);
    
 
    let response = {
        desimal: desimal,
        oktal: oktal,
        heksa: heksa
    }

    res.json(response)
})
    
//----------------------------------------------------------------------------------------------------------

// end-point "OKTAL" dengan method POST 
app.post("/siskom/oktal", (req, res) => {
    let angka = Number(req.body.angka) 
   
    let desimal = parseInt(angka,8)
    let biner = parseInt(angka, 8).toString(2)
    let heksa =  parseInt(angka,8).toString(16)
    
    let response = {
        desimal: desimal,
        biner: biner,
    heksa: heksa
    }

    res.json(response)
})
    
//----------------------------------------------------------------------------------------------------------

// end-point "HEKSADESIMAL" dengan method POST 
app.post("/siskom/heksadesimal", (req, res) => {
    let angka = Number(req.body.angka)

    let desimal = parseInt(angka, 16)
    let biner = parseInt(angka, 16).toString(2)
    let oktal =  parseInt(angka,16).toString(8)
 
    let response = {
        desimal: desimal,
        biner: biner,
        oktal: oktal
    }
     
    res.json(response)
})
    
//=============================================================================

//               TUPRAK 4
// end-point "BMI" dengan method POST 
app.post("/bmi", (req, res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)

    let bmi = berat / (tinggi * tinggi)
    var status = ""
    if (bmi < 18.5)  
        status = "Kekurangan berat badan"
     else if(bmi >= 18.5 ) 
        status = "Normal (Ideal)"
     else if(bmi >= 25.0 )
        status = "Kelebihan berat badan"
     else status = "Kegemukan (Obesitas)" 
     
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status : status
    }
    
    res.json(response)
})

//================================================================================


//               TUPRAK 5
// end-point "GANJIL GENAP" dengan method POST 
app.post("/angka", (req, res) => {
    let angka = Number(req.body.angka)

    var status = ""
//check if the number is even
if(angka % 2 == 0) 
    status = "Ini adalah angka GENAP"


// if the number is odd
else 
    status = "Ini adalah angka GANJIL"

     
    let response = {
        angka: angka,
        status: status
    }
    
    res.json(response)
})

//======================================================================================================================
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
   
// =============================================================================================================




