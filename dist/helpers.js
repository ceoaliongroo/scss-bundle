"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllMatches(text, regex) {
    let matches = [];
    let match;
    while (match = regex.exec(text)) {
        matches.push(match);
    }
    return matches;
}
exports.getAllMatches = getAllMatches;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUJBQThCLElBQVksRUFBRSxLQUFhO0lBQ3JELElBQUksT0FBTyxHQUFzQixFQUFFLENBQUM7SUFDcEMsSUFBSSxLQUFzQixDQUFDO0lBQzNCLE9BQU8sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFvQixFQUFFLENBQUM7UUFDakQsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBUEQsc0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0QWxsTWF0Y2hlcyh0ZXh0OiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHApOiBSZWdFeHBFeGVjQXJyYXlbXSB7XHJcbiAgICBsZXQgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5W10gPSBbXTtcclxuICAgIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5O1xyXG4gICAgd2hpbGUgKG1hdGNoID0gcmVnZXguZXhlYyh0ZXh0KSBhcyBSZWdFeHBFeGVjQXJyYXkpIHtcclxuICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoZXM7XHJcbn1cclxuIl19