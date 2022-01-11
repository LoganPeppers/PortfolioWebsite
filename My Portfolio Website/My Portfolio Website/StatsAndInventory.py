from dataclasses import dataclass

@dataclass
class Character:
	hp: int
	atk: int
	dfn: int
	crit: int
	spd: int
	eqpw: Weapon
	armr: Armor

class Weapon:
	atk: int
	dfn: int
	crit: int
	spd: int

class Armor:
	atk: int
	dfn: int
	spd: int

ironSword = new Weapon(5,2,1,10)
leatherArmor = new Armor(0,3,10)
me = new Character(20,5,5,1, 10, ironSword)

print(me)
