import './common.css';
import {Link} from 'react-router-dom';

function Length()
{
    function convertLength(p1,p2)
    {
        var fromUnit = document.getElementById("fromUnit").value;
        var toUnit = document.getElementById("toUnit").value;
        var value = document.querySelector("input[type='number']").value;

        var convertedValue;

        //convert input value to meters
        switch(fromUnit)
        {
            case "inches":
                convertedValue = value * 0.0254;
                break;
            case "feet":
                convertedValue = value * 0.3048;
                break;
            case "yards":
                convertedValue = value * 0.9144;
                break;
            case "miles":
                convertedValue = value * 1609.34;
                break;

            case "millimeters":
                convertedValue = value * 0.001;
                break;
            case "centimeters":
                convertedValue = value * 0.01;
                break;
            case "meters":
                convertedValue = value;
                break;
            case "kilometers":
                convertedValue = value * 1000;
                break;
        }

        //convert meters to target unit
        switch(toUnit)
        {
            case "inches":
                convertedValue = convertedValue / 0.0254;
                break;
            case "feet":
                convertedValue = convertedValue / 0.3048;
                break;
            case "yards":
                convertedValue = convertedValue / 0.9144;
                break;
            case "miles":
                convertedValue = convertedValue / 1609.34;
                break;

            case "millimeters":
                convertedValue = convertedValue / 0.001;
                break;
            case "centimeters":
                convertedValue = convertedValue / 0.01;
                break;
            case "meters":
                break;
            case "kilometers":
                convertedValue = convertedValue / 1000;
                break;
        }
        document.getElementById("result").innerHTML = value + " " + fromUnit + " = " + Math.round(convertedValue * 100) / 100 + " " + toUnit;

        //make the result visible in a box, box shall be hidden when the page loads and will be visible only after the first conversion
        //document.getElementById("result").style.display = "block";

    }
    return(

            <section id='Length'>
                <h1>Welcome to the Length Converter!</h1>
                
                <main>
                    <label htmlFor="fromUnit">From: </label>
                    <select id="fromUnit">
                        
                        <option value="inches">Inches</option>
                        <option value="feet">Feet</option>
                        <option value="yards">Yards</option>
                        <option value="miles">Miles</option>

                        <option value="centimeters">Centimeters</option>
                        <option value="millimeters">Millimeters</option>
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                    </select>

                    <span>--&gt;</span>

                    <label htmlFor="toUnit">To: </label>
                    <select id="toUnit">
                        
                        <option value="inches">Inches</option>
                        <option value="feet">Feet</option>
                        <option value="yards">Yards</option>
                        <option value="miles">Miles</option>

                        <option value="centimeters">Centimeters</option>
                        <option value="millimeters">Millimeters</option>
                        <option value="meters">Meters</option>
                        <option value="kilometers">Kilometers</option>
                    </select>

                    <br />
                    <input type="number" placeholder="Enter value" />
                    <br />
                    <button onClick={convertLength}>Convert</button>
                    <br />
                    <div id="result" style={{display: "none"}}>Result will appear here</div>
                </main>

                

                <p>Click here to visit the <Link to="/converters">Converters</Link> page</p>
            </section>
        
    )
} 

export default Length;