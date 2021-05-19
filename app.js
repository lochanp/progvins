const express = require('express');

const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.render('home')
})
app.get('/contact',(req,res) => {
    res.render('contact')
})
//SERVICES ROUTES
app.get('/services-processes',(req,res) => {
    res.render('services')
})
app.get('/enp-service',(req,res) => {
    res.render('enpService')
})
app.get('/gold-service',(req,res) => {
    res.render('goldService')
})
app.get('/brush-service',(req,res) => {
    res.render('brushService')
})
app.get('/silver-service',(req,res) => {
    res.render('silverService')
})
app.get('/nickel-service',(req,res) => {
    res.render('nickelService')
})
app.get('/chrome-service',(req,res) => {
    res.render('chromeService')
})
app.get('/copper-service',(req,res) => {
    res.render('copperService')
})
app.get('/other-service',(req,res) => {
    res.render('otherService')
})

//Material Routes
app.get('/plating-materials',(req,res) => {
    res.render('materials')
})
app.get('/gold-material',(req,res) => {
    res.render('goldMaterials')
})
app.get('/silver-material',(req,res) => {
    res.render('silverMaterials')
})
app.get('/copper-material',(req,res) => {
    res.render('copperMaterials')
})
app.get('/nickel-material',(req,res) => {
    res.render('nickelMaterials')
})
app.get('/rhodium-material',(req,res) => {
    res.render('rhodiumMaterials')
})
app.get('/palladium-material',(req,res) => {
    res.render('palladiumMaterials')
})
app.get('/platinum-material',(req,res) => {
    res.render('platinumMaterials')
})
app.get('/indium-material',(req,res) => {
    res.render('indiumMaterials')
})
//Method Routes
app.get('/plating-methods',(req,res) => {
    res.render('methods')
})
app.get('/electroless-method',(req,res) => {
    res.render('electrolessMethod')
})
app.get('/special-method',(req,res) => {
    res.render('specialMethod')
})
app.get('/electroplating-method',(req,res) => {
    res.render('electroplatingMethod')
})
app.get('/silver-method',(req,res) => {
    res.render('silverMethod')
})

//ABOUT ROUTES
app.get('/about',(req,res) => {
    res.render('about')
})
app.get('/about-quality',(req,res) => {
    res.render('aboutQlty')
})
app.get('/about-infrastructure',(req,res) => {
    res.render('aboutInfras')
})
app.get('/about-company',(req,res) => {
    res.render('aboutComp')
})
let port = process.env.PORT;
if(port === null || port === "") {
    port = 3000;
}   
app.listen(port,() => {
    console.log(`Server Started on port ${port}`)
})
