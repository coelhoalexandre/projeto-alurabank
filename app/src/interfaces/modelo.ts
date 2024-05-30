import { Imprimivel } from "../untils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {

}