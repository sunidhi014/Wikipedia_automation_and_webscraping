const {waitForDebugger}=require('inspector');
const puppeteer=require('puppeteer');
const request= require("request-promise")
const cheerio= require("cheerio");
let page;
const browserop=puppeteer.launch({headless:false});
console.log(browserop);
browserop.then(function(browser){
    const pagesArr=browser.pages();
    return pagesArr;
})
.then(function(browserPages){
    page=browserPages[0];
    let gotop=page.goto("https://www.google.com/");
    return gotop;
})
.then(function(){
    let waitfor=page.waitForSelector("input[type='text']",{visible: true})
    return waitfor;
})
//keyboard- type wikipedia
.then(function(){
    let presskey=page.type("input[type='text']","wikipedia");
    return presskey;
})
.then(function(){
    //press enter
    let pressenter=page.keyboard.press("Enter");
    return pressenter;
}).then(function(){
    let waitfor=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible: true})
    return waitfor;
})
.then(function(){
    let clickp=page.click("h3.LC20lb.MBeuO.DKV0Md");
    return clickp;
})
//select english language
.then(function(){
    let waitfor=page.waitForSelector('a#js-link-box-en.link-box',{visible: true})
    return waitfor;
})
.then(function(){
    let clicke=page.click('a#js-link-box-en.link-box');
    return clicke;
})
//select All portals
.then(function(){
    let waitfor=page.waitForSelector('li.portal-hright.portal-vbot',{visible: true})
    return waitfor;
})
.then(function(){
    let clickpot=page.click('li.portal-hright.portal-vbot');
    return clickpot;
})
//select A-Z index 
.then(function(){
    let waitfor=page.waitForSelector('#mw-content-text > div.mw-parser-output > div:nth-child(4) > ul > li:nth-child(9) > a',{visible: true})
    return waitfor;
})
.then(function(){
    let clickind=page.click('#mw-content-text > div.mw-parser-output > div:nth-child(4) > ul > li:nth-child(9) > a');
    return clickind;
})
//select S
.then(function(){
    let waitfor=page.waitForSelector('#toc > tbody > tr:nth-child(39) > td:nth-child(1) > b > a',{visible: true})
    return waitfor;
})
.then(function(){
    let clicks=page.click('#toc > tbody > tr:nth-child(39) > td:nth-child(1) > b > a');
    return clicks;
})
//select first article of S
.then(function(){
    let waitfor=page.waitForSelector('#mw-content-text > div.mw-allpages-body > ul > li:nth-child(1) > a',{visible: true})
    return waitfor;
})
.then(function(){
    let clicksart=page.click('#mw-content-text > div.mw-allpages-body > ul > li:nth-child(1) > a');
    return clicksart;
})
.then(function(){
    let waitfor=page.waitForSelector('#History',{visible: true})
    return waitfor;
})//select history
.then(function(){
    let clickhistory=page.click('#toc > ul > li.toclevel-1.tocsection-1 > a > span.toctext');
    return clickhistory;
})
.then(function(){
    let waitfor=page.waitForSelector('#toc > ul > li.toclevel-1.tocsection-4 > a > span.toctext',{visible: true})
    return waitfor;
})//select use in writing systems
.then(function(){
    let clickuws=page.click('#toc > ul > li.toclevel-1.tocsection-4 > a > span.toctext');
    return clickuws;
})
.then(function(){
    let waitfor=page.waitForSelector('#toc > ul > li.toclevel-1.tocsection-5 > a > span.toctext',{visible: true})
    return waitfor;
})//select related characters
.then(function(){
    let clickrc=page.click('#toc > ul > li.toclevel-1.tocsection-5 > a > span.toctext');
    return clickrc;
})
.catch(function(err){
    console.log(err);
})
//WEB SCRAPING- used Array to display content
let url = "https://en.wikipedia.org/wiki/S#History"
request(url,cb);
function cb(error,response,html){
    if(error){
        console.log("Error encountered");
    }
    else{
        handelhtml(html);
    }
}
function handelhtml(html){
    let $ = cheerio.load(html);
    console.log("HISTORY");
    var myArray1 = new Array($("#mw-content-text > div.mw-parser-output > p:nth-child(21)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(22)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(23)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(24)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(25)").text()
    );
    console.log("Origin \n"+myArray1);
    var myArray2 = new Array($("#mw-content-text > div.mw-parser-output > p:nth-child(30)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(31)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(32)").text());
    console.log("Long s \n"+myArray2);
    var myArray3 = new Array($("#mw-content-text > div.mw-parser-output > p:nth-child(34)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(35)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(36)").text(),
    $("#mw-content-text > div.mw-parser-output > p:nth-child(37)").text());
    console.log("USE IN WRITING SYSTEM \n"+myArray3);
    var myArray4 = new Array($("#mw-content-text > div.mw-parser-output > ul:nth-child(40)").text(),
    $("#mw-content-text > div.mw-parser-output > ul:nth-child(43)").text(),
    $("#mw-content-text > div.mw-parser-output > ul:nth-child(45)").text());
    console.log("RELATED CHARACTERS \n"+myArray4);
}