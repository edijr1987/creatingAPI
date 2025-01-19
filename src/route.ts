import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubsController from "./controllers/clubs-controller"

const router = Router();

//Router for players
router.get("/players", PlayerController.getPlayer)
router.post("/players", PlayerController.postPlayer)
router.delete("players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.updatePlayer)
router.get("/players/:id", PlayerController.getPlayerById)

//Router for clubs
router.get("/clubs", ClubsController.getClubs)

export default router