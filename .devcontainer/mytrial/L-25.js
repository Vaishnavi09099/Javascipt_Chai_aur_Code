//JAVASCRIPT EXECUTION CONTEXT  {} => global execution context ..dekh sabka global execution context alag hota hai node me this ka execution context alag hota hai aur windows me alag hota hai joki "window object " browser me
//global execution context to hoga hi hoga uske andar value hai ya ni it doesn't matter
///js in single threaded
////1. global execution context and 2. function execution context and ...(in mongo)3. Eval execution context(a part of global ec)
/////run in two phases: 1.memory creation phase,.....2.execution phase..........1.GLOBAL EXECUTION PHASE(ALLOCATED IN THIS)
///MEMORY PHASE me sare variables ko uthalo unhe memory allocate kro aur unko "undefined" value assign krdo.....functions me "definition" jati hai.....
///EXECUTION PHASE ab un variables me unki corresponding values dal do ...function me definition hi rhegi....ab jab vo calll hoga to vo function apna ek extra executional context banaega[[(new variable environment+execution thread)] jitni bar function execute hoga utni bar ye dabba banega
//NOTE: dekh jab bhi koi function execute hoga tab vo global execution context me hi return hoga apne(PARENT )k pas
////jo naye executional context bnenge vo apne km krne k bad dlt ho jate hai .... 
/////CALL STACK ME LIFO ORDER ME FUNCTIONS OUT HOTE HAI 