/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
   
        console.log("start");
        (async function(){
        const input = document.getElementById('Image');
        console.log(faceapi.nets);
        //await faceapi.nets.ssdMobilenetv1.loadFromUri('models');
        console.log("net1");
        //await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
        console.log(await faceapi.nets.faceLandmark68Net.loadFromUri('cdvfile://localhost/persistent/js/models'));
        //await faceapi.nets.faceLandmark68TinyNet.loadFromUri('./models');
        console.log("net2");
        const displaySize = { width: input.width, height: input.height }
        const canvas = document.getElementById("overlay");
        faceapi.matchDimensions(canvas, displaySize);
        console.log("size",displaySize);
        console.log("canvas",canvas);
    const detectionsWithLandmarks = await faceapi
    .detectSingleFace(input)
    .withFaceLandmarks()
    const resizedResults = faceapi.resizeResults(detectionsWithLandmarks, displaySize)
    faceapi.draw.drawFaceLandmarks(canvas, resizedResults)
    console.log("done")
    })()
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
