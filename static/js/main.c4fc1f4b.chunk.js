(this.webpackJsonpsfrider=this.webpackJsonpsfrider||[]).push([[0],{25:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/racks_icon.74942809.png"},34:function(e,a,t){e.exports=t.p+"static/media/crime.596b3fdf.png"},45:function(e,a,t){e.exports=t.p+"static/media/lights.3343e2ef.png"},47:function(e,a,t){e.exports=t.p+"static/media/SFRiderLogo_04.15538f6f.png"},48:function(e,a,t){e.exports=t(70)},53:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/lock.49d5c9f7.png"},68:function(e,a,t){e.exports=t.p+"static/media/poi.bae03b23.png"},69:function(e,a,t){e.exports=t.p+"static/media/test.73d7cf17.jpg"},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),o=t.n(l),c=(t(53),t(13)),i=t(14),s=t(17),m=t(15),u=t(27),p=t(16),d=t(1),h=t.n(d),f=(t(25),t(8)),E=t(30),b=t(36),y=t(37),k=t(38),g=t(39),v=t(40),w=t(12),M=t(3),S=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"createLeafletElement",value:function(e){}},{key:"componentDidMount",value:function(){for(var e={"2015-Present":[],"2010-2014":[],"2005-2009":[],"pre-2005":[]},a=h.a.icon({iconUrl:t(54),iconSize:[35,35]}),n=0;n<this.props.markers.length;n++){var r=this.props.markers[n],l=parseInt(r.install_yr);switch(!0){case l>2014:e["2015-Present"].push(r);break;case l>2009:e["2010-2014"].push(r);break;case l>2004:e["2005-2009"].push(r);break;default:e["pre-2005"].push(r)}}var o=h.a.layerGroup(e["2015-Present"].map((function(e){return h.a.marker([e.lat,e.lon],{icon:a}).bindPopup("Spaces: ".concat(e.spaces))}))),c=h.a.layerGroup(e["2010-2014"].map((function(e){return h.a.marker([e.lat,e.lon],{icon:a}).bindPopup("Spaces: ".concat(e.spaces))}))),i=h.a.layerGroup(e["2005-2009"].map((function(e){return h.a.marker([e.lat,e.lon],{icon:a}).bindPopup("Spaces: ".concat(e.spaces))}))),s=h.a.layerGroup(e["pre-2005"].map((function(e){return h.a.marker([e.lat,e.lon],{icon:a}).bindPopup("Spaces: ".concat(e.spaces))}))),m=h.a.layerGroup(this.props.markers.map((function(e){return h.a.marker([e.lat,e.lon],{icon:a}).bindPopup("Spaces: ".concat(e.spaces))}))),u=this.props.leaflet.map;h.a.control.layers({},{"2015-Present":o,"2010-2014":c,"2005-2009":i,"pre-2005":s,All:m},{position:"topleft",collapsed:!1}).addTo(u),h.a.control.scale().addTo(u)}},{key:"componentWillUnmount",value:function(){}}]),a}(w.a),j=(Object(M.d)(S),E.b.BaseLayer),C=(E.b.Overlay,new d.Icon({iconUrl:t(31),iconSize:[30,30]}));function O(e){var a=e.racks,t=r.a.useState(null),n=Object(f.a)(t,2),l=n[0],o=n[1];return console.log(a),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{center:[37.773943,-122.449484],zoom:13.4},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(E.b,{position:"topright",collapsed:!1},r.a.createElement(j,{name:"2015-Present"},r.a.createElement(k.a,null,a.filter((function(e){return parseInt(e.install_yr)>2014})).map((function(e){return r.a.createElement(g.a,{key:e.objectid,position:[e.shape.coordinates[1],e.shape.coordinates[0]],onClick:function(){o(e)},icon:C})})))),r.a.createElement(j,{name:"2010-2014"},r.a.createElement(k.a,null,a.filter((function(e){return parseInt(e.install_yr)>2009&&parseInt(e.install_yr)<2015})).map((function(e){return r.a.createElement(g.a,{key:e.objectid,position:[e.shape.coordinates[1],e.shape.coordinates[0]],onClick:function(){o(e)},icon:C})})))),r.a.createElement(j,{checked:!0,name:"2005-2009"},r.a.createElement(k.a,null,a.filter((function(e){return parseInt(e.install_yr)>2004&&parseInt(e.install_yr)<2010})).map((function(e){return r.a.createElement(g.a,{key:e.objectid,position:[e.shape.coordinates[1],e.shape.coordinates[0]],onClick:function(){o(e)},icon:C})})))),r.a.createElement(j,{name:"Pre-2005"},r.a.createElement(k.a,null,a.filter((function(e){return parseInt(e.install_yr)<2005})).map((function(e){return r.a.createElement(g.a,{key:e.objectid,position:[e.shape.coordinates[1],e.shape.coordinates[0]],onClick:function(){o(e)},icon:C})})))),r.a.createElement(j,{name:"All"},r.a.createElement(k.a,null,a.map((function(e){return r.a.createElement(g.a,{key:e.objectid,position:[e.shape.coordinates[1],e.shape.coordinates[0]],onClick:function(){o(e)},icon:C})}))))),l&&r.a.createElement(v.a,{position:[l.point.latitude,l.point.longitude],onClose:function(){o(null)}},r.a.createElement("div",null,r.a.createElement("h2",null,"Spaces : ",l.spaces),r.a.createElement("h2",null,"Year Installed : ",l.install_yr),r.a.createElement("h2",null,"Street : ",l.street))))))}var I=t(24),N=t.n(I),x=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"createLeafletElement",value:function(e){}},{key:"componentDidMount",value:function(){var e=h.a.control({position:"topright"});e.onAdd=function(){for(var e=h.a.DomUtil.create("div","info legend"),a=["Light","Medium","Heavy","Dense"],t=["144, 155, 244","103, 232, 51","  248, 254, 77","254,102,31"],n=["white","black","black","white"],r=[],l=0;l<a.length;l++){var o=a[l],c=t[l],i=n[l];r.push('<i style="background:rgb('+c+");color:"+i+';"> '+o+"</i>")}return e.innerHTML=r.join("<br>"),e};var a=this.props.leaflet.map;e.addTo(a)}},{key:"componentWillUnmount",value:function(){}}]),a}(w.a),P=Object(M.d)(x);function z(e){var a=e.traffic,t=r.a.useState(null),n=Object(f.a)(t,2);n[0],n[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{center:[37.773943,-122.449484],maxZoom:14,zoom:13.4},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(P,null),r.a.createElement(N.a,{opacity:.1,points:a,maxZoom:10,longitudeExtractor:function(e){return e.point.coordinates[0]},latitudeExtractor:function(e){return e.point.coordinates[1]},intensityExtractor:function(e){return parseFloat(e.yr2015_pm)}}))))}var _=new d.Icon({iconUrl:t(34),iconSize:[35,35]});function T(e){var a=e.crime,t=r.a.useState(null),n=Object(f.a)(t,2),l=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{center:[37.773943,-122.449484],zoom:13.4},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.map((function(e){return r.a.createElement(g.a,{key:e.incident_id+e.incident_number+Math.floor(1e3*Math.random()),position:[e.latitude,e.longitude],onClick:function(){o(e)},icon:_})})),l&&r.a.createElement(v.a,{position:[l.latitude,l.longitude],onClose:function(){o(null)}},r.a.createElement("div",null,r.a.createElement("h2",null,"Police District : ",l.police_district),r.a.createElement("h2",null,"Description : ",l.incident_description),r.a.createElement("h2",null,"Resolution : ",l.resolution))))))}var B=t(41),R=t(42),F=t(44),A=E.b.BaseLayer,D=E.b.Overlay,G=[37.773943,-122.449484],L=[[37.773943,-122.449484],[37.773943,-122.49]],U=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(b.a,{center:G,zoom:13},r.a.createElement(E.b,{position:"topright",collapsed:!1},r.a.createElement(A,{name:"Color"},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),r.a.createElement(A,{checked:!0,name:"Black and White"},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})),r.a.createElement(D,{name:"Injury"},r.a.createElement(g.a,{position:G},r.a.createElement(v.a,null,"A pretty CSS3 popup. ",r.a.createElement("br",null)," Easily customizable."))),r.a.createElement(D,{checked:!0,name:"Fatal"},r.a.createElement(k.a,null,r.a.createElement(B.a,{center:G,fillColor:"blue",radius:200}),r.a.createElement(B.a,{center:G,fillColor:"red",radius:100,stroke:!1}),r.a.createElement(k.a,null,r.a.createElement(B.a,{center:[G[0],G[1]-.05],color:"green",fillColor:"green",radius:100})))),r.a.createElement(D,{name:"Path"},r.a.createElement(R.a,{color:"purple"},r.a.createElement(v.a,null,"Popup for path"),r.a.createElement(F.a,{bounds:L})))))}}]),a}(n.Component);new d.Icon({iconUrl:t(45),iconSize:[25,30]});var W=t(43),Y=E.b.BaseLayer,H=E.b.Overlay,Z=[37.773943,-122.449484],K=new d.Icon({iconUrl:t(45),iconSize:[30,30]});function V(e){var a=e.routes,t=r.a.useState(null),n=Object(f.a)(t,2),l=n[0],o=n[1];return r.a.createElement(b.a,{center:Z,zoom:13},r.a.createElement(E.b,{position:"topright",collapsed:!1},r.a.createElement(Y,{checked:!0,name:"Color"},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),r.a.createElement(Y,{name:"Black and White"},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})),r.a.createElement(H,{name:"Lights"},r.a.createElement(k.a,null,a.lights.map((function(e){return r.a.createElement(g.a,{key:e.objectid+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),position:[e.point.coordinates[1],e.point.coordinates[0]],onClick:function(){o(e)},icon:K})})),l&&r.a.createElement(v.a,{position:[l.point.coordinates[1],l.point.coordinates[0]],onClose:function(){o(null)}},r.a.createElement("div",null,r.a.createElement("h2",null,"Corner of ",l.street1," and ",l.street2))))),r.a.createElement(H,{checked:!0,name:"Paths"},r.a.createElement(k.a,null,a.paths.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"green"},r.a.createElement(v.a,null,"Bicycle paths (Class I) are off-street paved bikeways. They are separated from vehicle traffic, but are almost always shared with pedestrians"),r.a.createElement(W.a,{opacity:.35,color:"lime",positions:e.shape.coordinates}))})))),r.a.createElement(H,{checked:!0,name:"Lanes"},r.a.createElement(k.a,null,a.lanes.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"orange"},r.a.createElement(v.a,null,"A standard bike lane (Class II) is a portion of road reserved for the preferential or exclusive use of people biking, indicated by road markings."),r.a.createElement(W.a,{opacity:.35,color:"orange",positions:e.shape.coordinates}))})))),r.a.createElement(H,{checked:!0,name:"Routes"},r.a.createElement(k.a,null,a.routes.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"purple"},r.a.createElement(v.a,null,"Shared lanes (Class III - sharrows) are typically wide travel lanes shared by bicyclists and vehicles."),r.a.createElement(W.a,{opacity:.35,color:"purple",positions:e.shape.coordinates}))})))),r.a.createElement(H,{checked:!0,name:"Seperated Bikeway"},r.a.createElement(k.a,null,a.seperated.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random()),color:"blue"},r.a.createElement(v.a,null,"Separated bikeways (Class IV), also commonly referred to as cycle tracks or protected bikeways, are bicycle facilities that are separated from traffic by parked cars, safe-hit posts, transit islands or other physical barriers."),r.a.createElement(W.a,{opacity:.35,positions:e.shape.coordinates}))}))))))}var J=E.b.BaseLayer,X=E.b.Overlay,$=new d.Icon({iconUrl:t(31),iconSize:[30,30]}),q=new d.Icon({iconUrl:t(34),iconSize:[35,35]}),Q=new d.Icon({iconUrl:t(68),iconSize:[35,35]}),ee=[{name:"Conservatory of Flowers",lon:37.7717577,lat:-122.4717941},{name:"De Young Museum",lon:37.771317,lat:-122.468709},{name:"Academy of Science",lon:37.7701666,lat:-122.4692006},{name:"Botanical Garden",lon:37.7675161,lat:-122.4696875},{name:"Stow Lake Boathouse / Water / Restrooms",lon:37.7707741,lat:-122.4776102},{name:"Portals of the Past",lon:37.770858,lat:-122.4828262},{name:"Bisons",lon:37.769635,lat:-122.498065},{name:"Dutch Windmill",lon:37.770456,lat:-122.509555},{name:"Polo Field With Cycling Track",lon:37.768337,lat:-122.492269},{name:"Strawberry Hill",lon:37.768597,lat:-122.475353},{name:"Baker Beach",lon:37.793469,lat:-122.484008},{name:"Golden Gate Bridge",lon:37.807756,lat:-122.47477},{name:"Fort Point",lon:37.810519,lat:-122.476586},{name:"Walt Disney Museum",lon:37.801304,lat:-122.458492},{name:"Crissy Field",lon:37.804301,lat:-122.465436},{name:"Cafe RX",lon:37.80044,lat:-122.452095},{name:"Fort Point Brewing",lon:37.803262,lat:-122.46496},{name:"Battery Cranston",lon:37.806992,lat:-122.476647},{name:"Nike Missle Site",lon:37.79192,lat:-122.474626},{name:"Oracle",lon:37.777341,lat:-122.390367},{name:"Bay Bridge Overpass",lon:37.788628,lat:-122.38782},{name:"Ferry Building",lon:37.795366,lat:-122.393788},{name:"Rincon Park/Giant Arrow",lon:37.791612,lat:-122.389657},{name:"Exploratorium",lon:37.801027,lat:-122.398914},{name:"Pier 39",lon:37.808472,lat:-122.409894},{name:"Fishermans Wharf",lon:37.807616,lat:-122.42083}];function ae(e){var a=e.racks,t=e.routes,n=e.traffic,l=e.crime,o=r.a.useState(null),c=Object(f.a)(o,2),i=(c[0],c[1],r.a.useState([37.76885,-122.48599])),s=Object(f.a)(i,2),m=(s[0],s[1],r.a.useState({center:[37.76885,-122.48599],zoom:14.5})),u=Object(f.a)(m,2),p=u[0],d=u[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{animate:!0,viewport:p,onbaselayerchange:function(e){!function(e){switch(e){case"GG Park":d({center:[37.76885,-122.48599],zoom:14.5});break;case"The Presidio":d({center:[37.8,-122.467],zoom:14.5});break;case"The Embarcadero":d({center:[37.794852,-122.393027],zoom:14.5})}}(e.name)}},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.a.createElement(E.b,{className:"layerscontrol",position:"topright",collapsed:!1},r.a.createElement(J,{checked:!0,name:"GG Park",lon:"test",lat:"test"},r.a.createElement(k.a,null,r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Place : Golden Gate Park"))),r.a.createElement(g.a,{key:Math.random(),position:[37.76885,-122.48599],icon:Q})))),r.a.createElement(J,{name:"The Presidio"},r.a.createElement(k.a,null,r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Place : The Presidio"))),r.a.createElement(g.a,{key:Math.random(),position:[37.796711,-122.463787],icon:Q})))),r.a.createElement(J,{name:"The Embarcadero"},r.a.createElement(k.a,null,r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Place : The Embarcadero"))),r.a.createElement(g.a,{key:Math.random(),position:[37.795883,-122.402943],icon:Q})))),r.a.createElement(X,{checked:!0,name:"Routes"},r.a.createElement(k.a,null,t.paths.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"green"},r.a.createElement(v.a,null,"Bicycle paths (Class I) are off-street paved bikeways. They are separated from vehicle traffic, but are almost always shared with pedestrians"),r.a.createElement(W.a,{opacity:.35,weight:6,color:"lime",positions:e.shape.coordinates}))})),t.lanes.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"orange"},r.a.createElement(v.a,null,"A standard bike lane (Class II) is a portion of road reserved for the preferential or exclusive use of people biking, indicated by road markings."),r.a.createElement(W.a,{opacity:.35,weight:6,color:"orange",positions:e.shape.coordinates}))})),t.routes.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"purple"},r.a.createElement(v.a,null,"Shared lanes (Class III - sharrows) are typically wide travel lanes shared by bicyclists and vehicles."),r.a.createElement(W.a,{opacity:.35,weight:6,color:"purple",positions:e.shape.coordinates}))})),t.seperated.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random()),color:"blue"},r.a.createElement(v.a,null,"Separated bikeways (Class IV), also commonly referred to as cycle tracks or protected bikeways, are bicycle facilities that are separated from traffic by parked cars, safe-hit posts, transit islands or other physical barriers."),r.a.createElement(W.a,{opacity:.35,weight:6,positions:e.shape.coordinates}))})))),r.a.createElement(X,{checked:!0,name:"Racks"},r.a.createElement(k.a,null,a.filter((function(e){return parseInt(e.install_yr)>2009})).map((function(e){return r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Spaces : ",e.spaces),r.a.createElement("h2",null,"Year Installed : ",e.install_yr),r.a.createElement("h2",null,"Street : ",e.street))),r.a.createElement(g.a,{key:e.objectid,position:[e.point.latitude,e.point.longitude],icon:$}))})))),r.a.createElement(X,{checked:!0,name:"Traffic"},r.a.createElement(k.a,null,r.a.createElement(N.a,{opacity:.1,points:n,maxZoom:10,longitudeExtractor:function(e){return e.point.coordinates[0]},latitudeExtractor:function(e){return e.point.coordinates[1]},intensityExtractor:function(e){return parseFloat(e.yr2015_pm)}}))),r.a.createElement(X,{checked:!0,name:"Crime"},r.a.createElement(k.a,null,l.map((function(e){return r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Police District : ",e.police_district),r.a.createElement("h2",null,"Description : ",e.incident_description),r.a.createElement("h2",null,"Resolution : ",e.resolution))),r.a.createElement(g.a,{key:e.incident_id+e.incident_number+Math.floor(1e3*Math.random()),position:[e.latitude,e.longitude],icon:q}))})))),r.a.createElement(X,{checked:!0,name:"Points of Interest"},r.a.createElement(k.a,null,ee.map((function(e){return r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Name : ",e.name))),r.a.createElement(g.a,{key:"key"+Math.floor(1e3*Math.random()),position:[e.lon,e.lat],icon:Q}))}))))))))}var te=E.b.BaseLayer,ne=E.b.Overlay,re=[37.773943,-122.449484],le=new d.Icon({iconUrl:t(31),iconSize:[30,30]}),oe=new d.Icon({iconUrl:t(34),iconSize:[35,35]});function ce(e){var a=e.racks,t=e.routes,n=e.traffic,l=e.crime,o=r.a.useState(null),c=Object(f.a)(o,2);c[0],c[1];return console.log(a),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,{center:re,zoom:13},r.a.createElement(E.b,{position:"topright",collapsed:!1},r.a.createElement(te,{checked:!0,name:"Color"},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})),r.a.createElement(te,{name:"Black and White"},r.a.createElement(y.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"})),r.a.createElement(ne,{checked:!0,name:"Routes"},r.a.createElement(k.a,null,t.paths.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"green"},r.a.createElement(v.a,null,"Bicycle paths (Class I) are off-street paved bikeways. They are separated from vehicle traffic, but are almost always shared with pedestrians"),r.a.createElement(W.a,{opacity:.35,color:"lime",positions:e.shape.coordinates}))})),t.lanes.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"orange"},r.a.createElement(v.a,null,"A standard bike lane (Class II) is a portion of road reserved for the preferential or exclusive use of people biking, indicated by road markings."),r.a.createElement(W.a,{opacity:.35,color:"orange",positions:e.shape.coordinates}))})),t.routes.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random())*Math.floor(1e4*Math.random()),color:"purple"},r.a.createElement(v.a,null,"Shared lanes (Class III - sharrows) are typically wide travel lanes shared by bicyclists and vehicles."),r.a.createElement(W.a,{opacity:.35,color:"purple",positions:e.shape.coordinates}))})),t.seperated.map((function(e){return r.a.createElement(R.a,{key:e.cnn+Math.floor(1e4*Math.random()),color:"blue"},r.a.createElement(v.a,null,"Separated bikeways (Class IV), also commonly referred to as cycle tracks or protected bikeways, are bicycle facilities that are separated from traffic by parked cars, safe-hit posts, transit islands or other physical barriers."),r.a.createElement(W.a,{opacity:.35,positions:e.shape.coordinates}))})))),r.a.createElement(ne,{checked:!0,name:"Racks"},r.a.createElement(k.a,null,a.filter((function(e){return parseInt(e.spaces)>2})).map((function(e){return r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Spaces : ",e.spaces),r.a.createElement("h2",null,"Year Installed : ",e.install_yr),r.a.createElement("h2",null,"Street : ",e.street))),r.a.createElement(g.a,{key:e.objectid,position:[e.point.latitude,e.point.longitude],icon:le}))})))),r.a.createElement(ne,{name:"Traffic"},r.a.createElement(k.a,null,r.a.createElement(N.a,{opacity:.1,points:n,maxZoom:10,longitudeExtractor:function(e){return e.point.coordinates[0]},latitudeExtractor:function(e){return e.point.coordinates[1]},intensityExtractor:function(e){return parseFloat(e.yr2015_pm)}}))),r.a.createElement(ne,{name:"Crime"},r.a.createElement(k.a,null,l.map((function(e){return r.a.createElement(R.a,null,r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Police District : ",e.police_district),r.a.createElement("h2",null,"Description : ",e.incident_description),r.a.createElement("h2",null,"Resolution : ",e.resolution))),r.a.createElement(g.a,{key:e.incident_id+e.incident_number+Math.floor(1e3*Math.random()),position:[e.latitude,e.longitude],icon:oe}))}))))))))}var ie=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).onClose=function(e){t.props.onClose&&t.props.onClose(e)},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.show?r.a.createElement("div",{className:"modal",id:"modal"},r.a.createElement("h2",{className:"modal-title"},"About SFRider"),r.a.createElement("div",{className:"content-container"},r.a.createElement("p",{className:"modal-content"},"This project is focused on displaying data from API endpoints in novel and engaging ways. ",r.a.createElement("br",null),"I used an open source library called React-Leaflet to draw the maps and used OpenSF datasets as API endpoints. ",r.a.createElement("br",null),"I designed my own .png markers using Preview and utilized built-in leaflet.js functionality to draw paths and shapes. ",r.a.createElement("br",null),'As a bonus, I created a custom "legend" component which is displayed on one of the maps.',r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("p",{className:"modal-content-2"},"Each of the 6 maps gives a different snapshot of the SF biking experience.",r.a.createElement("br",null),"* Traffic uses bike traffic data because other than red lights, SF is pretty bike friendly place.",r.a.createElement("br",null),"* Racks are bikeracks listed by year installed.",r.a.createElement("br",null),"* Crime uses The OpenSF Crime data, which is filtered for theft of property crimes.",r.a.createElement("br",null),"* The last three maps, Routes, All and Scenic, are using OpenSF datasets of bike lanes all over the city.",r.a.createElement("br",null),"* The 4 different levels of lanes are color coordinated and when clicked give a brief description of the type of lane.",r.a.createElement("br",null),"* The Scenic map showcases three of San Francisco's world famouse bicycle riding experiences.",r.a.createElement("br",null)),r.a.createElement("p",{className:"modal-content"},r.a.createElement("br",null),"Check out some of my other great projects on my github ",r.a.createElement("a",{className:"portfolio-link",href:"https://rawbdata.github.io/porfolio/",target:"_blank"},"porfolio")," page.")),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{className:"toggle-button",onClick:this.onClose},"To The Maps!"))):null}}]),a}(r.a.Component),se=t(47),me=t.n(se),ue=new d.Icon({iconUrl:t(69),iconSize:[25,25]}),pe=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).modalShow=function(a){e.setState({modalShow:!e.state.modalShow})},e.state={mainMapSelection:"racks",bikeRacks:[],crime:[],accidents:[],traffic:[],routes:{},modalShow:!0},e.changeMap=e.changeMap.bind(Object(u.a)(e)),e}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.sfgov.org/resource/hn4j-6fx5.json").then((function(e){return e.json()})).then((function(a){e.setState({bikeRacks:a})})),fetch("https://data.sfgov.org/resource/wg3w-h783.json").then((function(e){return e.json()})).then((function(a){var t=a.filter((function(e){return e.latitude&&"Larceny Theft"===e.incident_category})),n=a.filter((function(e){return e.latitude&&"Traffic Collision"===e.incident_category}));e.setState({crime:t,accidents:n})})),fetch("https://data.sfgov.org/resource/v4v2-5x7s.json").then((function(e){return e.json()})).then((function(a){e.setState({traffic:a})})),fetch("https://data.sfgov.org/resource/a5zr-cehj.json").then((function(e){return e.json()})).then((function(a){var t={};t.lights=a,fetch("https://data.sfgov.org/resource/ygmz-vaxd.json").then((function(e){return e.json()})).then((function(a){t.paths=[],t.lanes=[],t.routes=[],t.seperated=[];for(var n=0;n<a.length;n++){for(var r=a[n],l=0;l<r.shape.coordinates.length;l++){var o=r.shape.coordinates[l],c=o[0],i=o[1];r.shape.coordinates[l]=[i,c]}switch(r.symbology){case"BIKE ROUTE":t.routes.push(r);break;case"BIKE PATH":t.paths.push(r);break;case"SEPARATED BIKEWAY":t.seperated.push(r);break;default:t.lanes.push(r)}}e.setState({routes:t})}))}))}},{key:"changeMap",value:function(e){this.setState({mainMapSelection:e})}},{key:"render",value:function(){var e,a=this;switch(this.state.mainMapSelection){case"racks":e=r.a.createElement(O,{icon:ue,racks:this.state.bikeRacks});break;case"traffic":e=r.a.createElement(z,{traffic:this.state.traffic});break;case"crime":e=r.a.createElement(T,{crime:this.state.crime});break;case"routes":e=r.a.createElement(V,{routes:this.state.routes});break;case"accidents":e=r.a.createElement(U,{accidents:this.state.accidents});break;case"all":e=r.a.createElement(ce,{crime:this.state.crime,accidents:this.state.accidents,racks:this.state.bikeRacks,traffic:this.state.traffic,routes:this.state.routes});break;case"scenic":e=r.a.createElement(ae,{crime:this.state.crime,accidents:this.state.accidents,racks:this.state.bikeRacks,traffic:this.state.traffic,routes:this.state.routes})}return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{className:"logo-image",src:me.a,alt:"website logo"})),r.a.createElement("div",{className:"tabs-wrapper"},r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"tab"},r.a.createElement("input",{type:"radio",name:"css-tabs",id:"tab-1",defaultChecked:"traffic"===this.state.mainMapSelection,className:"tab-switch",onClick:function(){a.changeMap("traffic")}}),r.a.createElement("label",{htmlFor:"tab-1",className:"tab-label"},"Traffic")),r.a.createElement("div",{className:"tab"},r.a.createElement("input",{type:"radio",name:"css-tabs",id:"tab-2",defaultChecked:"racks"===this.state.mainMapSelection,className:"tab-switch",onClick:function(){a.changeMap("racks")}}),r.a.createElement("label",{htmlFor:"tab-2",className:"tab-label"},"Racks")),r.a.createElement("div",{className:"tab"},r.a.createElement("input",{type:"radio",name:"css-tabs",id:"tab-4",defaultChecked:"crime"===this.state.mainMapSelection,className:"tab-switch",onClick:function(){a.changeMap("crime")}}),r.a.createElement("label",{htmlFor:"tab-4",className:"tab-label"},"Crime")),r.a.createElement("div",{className:"tab"},r.a.createElement("input",{type:"radio",name:"css-tabs",id:"tab-5",defaultChecked:"routes"===this.state.mainMapSelection,className:"tab-switch",onClick:function(){a.changeMap("routes")}}),r.a.createElement("label",{htmlFor:"tab-5",className:"tab-label"},"Routes")),r.a.createElement("div",{className:"tab"},r.a.createElement("input",{type:"radio",name:"css-tabs",id:"tab-6",defaultChecked:"all"===this.state.mainMapSelection,className:"tab-switch",onClick:function(){a.changeMap("all")}}),r.a.createElement("label",{htmlFor:"tab-6",className:"tab-label"},"All")),r.a.createElement("div",{className:"tab"},r.a.createElement("input",{type:"radio",name:"css-tabs",id:"tab-7",defaultChecked:"scenic"===this.state.mainMapSelection,className:"tab-switch",onClick:function(){a.changeMap("scenic")}}),r.a.createElement("label",{htmlFor:"tab-7",className:"tab-label"},"Scenic")))),r.a.createElement("div",{className:"socials"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/benjaminrawner/",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin lnkd"}))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/RawBData",target:"_blank"},r.a.createElement("i",{className:"fab fab fa-github ghub"}))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://rawbdata.github.io/porfolio/",target:"_blank"},r.a.createElement("i",{className:"fas fa-address-card port"}))))),r.a.createElement("div",{className:"map-container"},e)),r.a.createElement("div",{className:"modal-container"},r.a.createElement(ie,{onClose:this.modalShow,show:this.state.modalShow})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.c4fc1f4b.chunk.js.map