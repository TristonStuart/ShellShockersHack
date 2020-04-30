// This Is A File Containing UnCompressed / Obfuscated Functions from ShellShockers and the function location in newer versions with Obfuscated funcitons
// Found By : TDStuart

// Add Player
// Obfuscated :
function Ci(e) {
  e.id == l && (S = e.id);
  var t = new ht(e,gr);
  t.id == l && (Pr = t,
    (Er = t).ws = ws,
    Li()),
    t.playing || t.actor.removeFromPlay(),
    Sr[e.id] = t,
    Ii()
  }
// UnObfuscated :
function addPlayer(playerData) {
  var player = new Player(playerData);
  if (player.id == meId) {
    me = player;
    me.ws = ws;
    updateAmmoUi();
  }
  if (!player.playing) player.actor.removeFromPlay();
  players[playerData.id] = player;
  rebuildPlayerList();
}


// Remove Player
// Obfuscated :
function Ri(e) {
  var t = Sr[e];
  e != l ? t && (t.actor.remove(),
  delete Sr[e],
  Ii()) : console.log("Tried to remove ME")
}
// UnObfuscated :
function removePlayer(playerId) {
  var player = players[playerId];
  if (playerId == meId) {
    console.log("Tried to remove ME");
    return;
  }
  if (player) {
    player.actor.remove();
    delete players[playerId];
    rebuildPlayerList();
  }
}


// Rebuild Player List
// Obfuscated :
function Ii() { // Rebuild Player List
  for (var e = [], t = 0; t < Sr.length; t++)
  Sr[t] && e.push(t);
  if (kr) {
    var r = function() {
      for (var e = [0, 0, 0], t = 0; t < playerLimit; t++) {
        var r = Sr[t];
        r && (e[r.team] += r.score)
      }
      var i = 0;
      return e[1] > e[2] ? i = 1 : e[2] > e[1] && (i = 2),
      {
        score: e,
        leader: i
      }
    }();
    r.leader > 0 && (Oi = r.leader),
    r.score[Oi] += 1e5,
    e.sort((function(e, t) {
      return Sr[t].score + r.score[Sr[t].team] - (Sr[e].score + r.score[Sr[e].team])
    }
  ))
} else
e.sort((function(e, t) {
  return Sr[t].score - Sr[e].score
}
));
var i = document.getElementById("playerList").children;
for (t = 0; t < e.length; t++) {
  var n = Sr[e[t]]
  , o = i[t]
  , a = o.children[0]
  , s = a.children[0]
  , y = a.children[1]
  , c = o.children[1];
  if (s.classList.add("playerSlot--name"),
  y.classList.add("playerSlot--score"),
  c.classList.add("playerSlot--icons"),
  o.style.display = "block",
  s.innerText = n.name,
  n.id != l) {
    o.addEventListener("click", function(e, t) {
      return function() {
        var r = {
          playerId: e,
          uniqueId: t,
          isGameOwner: A,
          muted: Sr[e].muted,
          playerName: Sr[e].name,
          muteFunc: function() {
            Di(this.playerId, this.uniqueId)
          },
          bootFunc: function() {
            wi(this.playerId, this.uniqueId)
          }
        };
        vueApp.showPlayerActionsPopup(r)
      }
    }(n.id, n.uniqueId), !1),
    o.style.pointerEvents = "all",
    o.style.cursor = "pointer"
  }
  y.innerText = n.score,
  a.classList.add("playerSlot--name-score");
  let r = "playerSlot--name-score"
  , h = "playerSlot-player-is-me"
  , u = "playerSlot-player-is-them";
  n.id == l ? a.className = `${r} ${h} ${Ie.meClass[n.team]}` : a.className = `${r} ${u} ${Ie.themClass[n.team]}`,
  c.innerText = "";
  const d = document.createElement("i")
  , p = document.createElement("i");
  d.className = "fas fa-egg hidden",
  p.className = "fas fa-ban hidden",
  n.upgradeProductId && n.upgradeProductId > 0 && d.classList.remove("hidden"),
  n.muted && p.classList.remove("hidden"),
  c.appendChild(d),
  c.appendChild(p)
}
for (; t < playerLimit; )
i[t].style.display = "none",
t++
}
// Unobfuscated :
function rebuildPlayerList() {
  var playerIdxs = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i]) {
      playerIdxs.push(i);
    }
  }
  if (gameType == GameType.teams) {
    var teams = getTeamScores();
    if (teams.leader > 0) lastLeadingTeam = teams.leader;
    teams.score[lastLeadingTeam] += 1e5;
    playerIdxs.sort(function(a, b) {
      return players[b].score + teams.score[players[b].team] - (players[a].score + teams.score[players[a].team]);
    });
  } else {
    playerIdxs.sort(function(a, b) {
      return players[b].score - players[a].score;
    });
  }
  var list = document.getElementById("playerList").children;
  var i;
  for (i = 0; i < playerIdxs.length; i++) {
    var player = players[playerIdxs[i]];
    list[i].style.display = "block";
    list[i].children[0].innerText = player.name;
    list[i].children[1].innerText = player.score;
    if (players[playerIdxs[i]].id == meId) {
      list[i].className = "thisPlayer";
      list[i].style.background = teamColors.meBackground[player.team];
    } else {
      list[i].className = "otherPlayer";
      list[i].style.background = teamColors.themBackground[player.team];
      list[i].style.color = teamColors.text[player.team];
    }
  }
  while (i < 18) {
    list[i].style.display = "none";
    i++;
  }
}
