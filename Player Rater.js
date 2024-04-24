function dropper() {
    document.getElementById("dropmenu").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.abut')) {
        var dropdowns = document.getElementsByClassName("dropcont");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const Resulter = document.getElementById("resulter")



function reset(){
	document.getElementById("three").value = ""
    document.getElementById("passing").value = ""
    document.getElementById("midrange shot").value = ""
    document.getElementById("close shot").value = ""
    document.getElementById("blocking").value = ""
    document.getElementById("steals").value = ""
    document.getElementById("handles").value = ""
    document.getElementById ("footwork").value = ""
    document.getElementById("physicals").value = "" 
    document.getElementById("rebounds").value = ""
	document.getElementById("overall").value = ""
}	

resulter.addEventListener("click", function () {
const ThreesA = document.getElementById("three").value
const PassA = document.getElementById("passing").value
const MiddyA = document.getElementById("midrange shot").value
const BunnyA = document.getElementById("close shot").value
const BlksA = document.getElementById("blocking").value
const StlsA = document.getElementById("steals").value
const HandsA = document.getElementById("handles").value
const FtwrkA = document.getElementById ("footwork").value
const PhysA = document.getElementById("physicals").value
const RebsA = document.getElementById("rebounds").value


const Threes = parseInt(ThreesA)
const Pass = parseInt(PassA)
const Middy = parseInt(MiddyA)
const Bunny = parseInt(BunnyA)
const Blks = parseInt(BlksA)
const Stls = parseInt(StlsA)
const Hands = parseInt(HandsA)
const Ftwrk = parseInt(FtwrkA)
const Phys = parseInt(PhysA)
const Rebs = parseInt(RebsA);

const PositionOpt = document.getElementById("PositionSelect")
const Position = PositionOpt.value

	 switch(Position){
		 case "Point Guard":
			var PosUp = (Threes + Pass + Hands + Stls) * 1.75
			var PosDwn = (Blks + Ftwrk + Rebs + Bunny) * 0.5
			var PosNrm = Middy + Phys
		 break;
		 
	 case "Shooting Guard":
			var PosUp = (Threes + Middy + Bunny + Stls) * 1.75
			var PosDwn = (Blks + Ftwrk + Rebs + Phys) * 0.5
			var PosNrm = Hands + Pass
		 break;
		 
	 case "Small Forward":
			var PosUp = (Threes + Middy + Bunny + Rebs) * 1.75
			var PosDwn = (Hands + Ftwrk + Blks + Pass) * 0.5
			var PosNrm = Phys + Stls
			break;
	 case "Power Forward": 
			var PosUp = (Blks + Middy + Bunny + Rebs) * 1.75
			var PosDwn = (Threes + Stls + Hands + Pass) * 0.5
			var PosNrm =  Ftwrk + Phys
			break;
	 case "Center":
			var PosUp = (Blks + Ftwrk + Bunny + Rebs) * 1.75
			var PosDwn = (Threes + Middy + Stls + Pass) * 0.5    
			var PosNrm = Hands + Phys
			var rate = (PosUp + PosDwn + PosNrm)/10
	 break;}
{var rate = (PosUp + PosDwn + PosNrm)/10
document.getElementById("overall").value = rate;}
})






