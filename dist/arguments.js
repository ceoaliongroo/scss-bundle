"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const Contracts = require("./contracts");
let verbosityValues = [];
for (let key in Contracts.Verbosity) {
    if (Number(key) % 1 !== 0) {
        verbosityValues.push(key);
    }
}
const DEDUPE_KEY = "dedupe";
exports.argv = yargs
    .help("h", "Show help.")
    .alias("h", "help")
    .version(() => {
    return `Current version: ${require("../package.json").version}.`;
})
    .alias("v", "version")
    .config("config")
    .alias("c", "config")
    .options("e", {
    alias: "entry",
    describe: "Entry file.",
    type: "string"
})
    .options("d", {
    alias: "dest",
    describe: "Bundled file destination.",
    type: "string"
})
    .options("verbosity", {
    describe: "Verbosity of output.",
    choices: verbosityValues,
    default: Contracts.Verbosity[Contracts.Verbosity.Verbose]
})
    .array(DEDUPE_KEY)
    .default(DEDUPE_KEY, [], "[]")
    .usage("Usage: scss-bundle [options]")
    .string(["c", "e", "d"])
    .argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJndW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FyZ3VtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQix5Q0FBeUM7QUFFekMsSUFBSSxlQUFlLEdBQWEsRUFBRSxDQUFDO0FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBRWpCLFFBQUEsSUFBSSxHQUFHLEtBQUs7S0FDbEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUM7S0FDdkIsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7S0FDbEIsT0FBTyxDQUFDO0lBQ0wsTUFBTSxDQUFDLG9CQUFvQixPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztBQUNyRSxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztLQUNyQixNQUFNLENBQUMsUUFBUSxDQUFDO0tBQ2hCLEtBQUssQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO0tBQ3BCLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFDVixLQUFLLEVBQUUsT0FBTztJQUNkLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLElBQUksRUFBRSxRQUFRO0NBQ2pCLENBQUM7S0FDRCxPQUFPLENBQUMsR0FBRyxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07SUFDYixRQUFRLEVBQUUsMkJBQTJCO0lBQ3JDLElBQUksRUFBRSxRQUFRO0NBQ2pCLENBQUM7S0FDRCxPQUFPLENBQUMsV0FBVyxFQUFFO0lBQ2xCLFFBQVEsRUFBRSxzQkFBc0I7SUFDaEMsT0FBTyxFQUFFLGVBQWU7SUFDeEIsT0FBTyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7Q0FDNUQsQ0FBQztLQUNELEtBQUssQ0FBQyxVQUFVLENBQUM7S0FDakIsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO0tBQzdCLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztLQUNyQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCLElBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5YXJncyBmcm9tIFwieWFyZ3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIENvbnRyYWN0cyBmcm9tIFwiLi9jb250cmFjdHNcIjtcclxuXHJcbmxldCB2ZXJib3NpdHlWYWx1ZXM6IHN0cmluZ1tdID0gW107XHJcbmZvciAobGV0IGtleSBpbiBDb250cmFjdHMuVmVyYm9zaXR5KSB7XHJcbiAgICBpZiAoTnVtYmVyKGtleSkgJSAxICE9PSAwKSB7XHJcbiAgICAgICAgdmVyYm9zaXR5VmFsdWVzLnB1c2goa2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgREVEVVBFX0tFWSA9IFwiZGVkdXBlXCI7XHJcblxyXG5leHBvcnQgbGV0IGFyZ3YgPSB5YXJnc1xyXG4gICAgLmhlbHAoXCJoXCIsIFwiU2hvdyBoZWxwLlwiKVxyXG4gICAgLmFsaWFzKFwiaFwiLCBcImhlbHBcIilcclxuICAgIC52ZXJzaW9uKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYEN1cnJlbnQgdmVyc2lvbjogJHtyZXF1aXJlKFwiLi4vcGFja2FnZS5qc29uXCIpLnZlcnNpb259LmA7XHJcbiAgICB9KVxyXG4gICAgLmFsaWFzKFwidlwiLCBcInZlcnNpb25cIilcclxuICAgIC5jb25maWcoXCJjb25maWdcIilcclxuICAgIC5hbGlhcyhcImNcIiwgXCJjb25maWdcIilcclxuICAgIC5vcHRpb25zKFwiZVwiLCB7XHJcbiAgICAgICAgYWxpYXM6IFwiZW50cnlcIixcclxuICAgICAgICBkZXNjcmliZTogXCJFbnRyeSBmaWxlLlwiLFxyXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCJcclxuICAgIH0pXHJcbiAgICAub3B0aW9ucyhcImRcIiwge1xyXG4gICAgICAgIGFsaWFzOiBcImRlc3RcIixcclxuICAgICAgICBkZXNjcmliZTogXCJCdW5kbGVkIGZpbGUgZGVzdGluYXRpb24uXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxyXG4gICAgfSlcclxuICAgIC5vcHRpb25zKFwidmVyYm9zaXR5XCIsIHtcclxuICAgICAgICBkZXNjcmliZTogXCJWZXJib3NpdHkgb2Ygb3V0cHV0LlwiLFxyXG4gICAgICAgIGNob2ljZXM6IHZlcmJvc2l0eVZhbHVlcyxcclxuICAgICAgICBkZWZhdWx0OiBDb250cmFjdHMuVmVyYm9zaXR5W0NvbnRyYWN0cy5WZXJib3NpdHkuVmVyYm9zZV1cclxuICAgIH0pXHJcbiAgICAuYXJyYXkoREVEVVBFX0tFWSlcclxuICAgIC5kZWZhdWx0KERFRFVQRV9LRVksIFtdLCBcIltdXCIpXHJcbiAgICAudXNhZ2UoXCJVc2FnZTogc2Nzcy1idW5kbGUgW29wdGlvbnNdXCIpXHJcbiAgICAuc3RyaW5nKFtcImNcIiwgXCJlXCIsIFwiZFwiXSlcclxuICAgIC5hcmd2IGFzIENvbnRyYWN0cy5Bcmd1bWVudHNWYWx1ZXM7XHJcbiJdfQ==