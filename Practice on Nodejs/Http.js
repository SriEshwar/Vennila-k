const http=require('http');
function requestHandler(request,response)
{
    
        const url=request.url;
        const method=request.method;
        //routing requests
        if(url==='/') //this is the index page displaying form 
        {
            response.setHeader('content-type','text/html');
            response.write('<html>');
            response.write('<head><title>hello</title></head>');
            response.write('<body><form action="/message" method="POST"> <input type="text"><input type="submit" value="send"></form></body>');
            return response.end();
        }
        //when the form is submitted , reading the data . req.on() method binds the data to object. It is a way to express when there is something happening, it executes the function added as a parameter.
        if(url==='/message' && method =='POST') 
        {
            //reading data from response
            const body=[];
            request.on('data',(chunk)=>{  //if data is passed in request, pushes all the data chunks(hex decimal value) in an array
                body.push(chunk)
            })
            request.on('end',()=>{  //when the requests sends the data fully , end event occurs. if end event occurs, concating the array and converting into string
                const parsedBody=Buffer.concat(body).toString();
                console.log(parsedBody); //input values will be displayed.
            })/
            //redirecting code
            response.setHeader('Location','/');
            response.statusCode = 302;
            return response.end(); //by giving the return statement the below code will not be executed. the process ends.
        }
        // Note : if we didnt use return statement , below code also gets executed. 
        //if the requested url didnt match the above if condition urls , the below code will be executed.
            response.setHeader('content-type','text/html');
            response.write('<html>');
            response.write('<head><title>hello</title></head>');
            response.write('<body><h1>routing requests</h1></body>');
            response.write('</html>');
            return response.end();
        
    
};
const server= http.createServer(requestHandler);
server.listen(2504);