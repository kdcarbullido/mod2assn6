function pitchClass(note) {

    var notes = "ABCDEFG";
    var numRepValues = [9, 11, 0, 2, 4, 5, 7];

    if (note.length < 1 || note.length > 2) {return null}       // invalid input length
    var indx = notes.indexOf(note.charAt(0));
    if (indx === -1) {return null}                  // note not found invalid note
    var numRep = numRepValues[indx];
    if (note.length === 2) {
        if (note.charAt(1) === "#") {               // sharp +1
            numRep++;
            if (numRep > 11) {
                numRep = 0;
            }
        } else if (note.charAt(1) === "b") {        // flat -1
            numRep--;
            if (numRep <0) {
                numRep = 11;
            }
        } else {
            return null;                            // Invalid modifier
        }
    }
    return numRep;
}

