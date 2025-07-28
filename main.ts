type handler = () => void
let displayHandler: handler
function displayAfterLogo(programmableCode: () => void): void {
    displayHandler = programmableCode;
}
/*
In your extention you can have
'your code' displayed automatically
after the radio group got changed
by the onLogoEvent.

    displayAfterLogo(() => {
        ... your code ...
    })
*/

let GROUP = 1
basic.showNumber(GROUP)
basic.pause(1000)
basic.showIcon(IconNames.Yes)
basic.pause(1000)
if (displayHandler) displayHandler()

//% color="#00CC00" icon="\uf1f9"
//% block="General"
//% block.loc.nl="Algemeen"
namespace CGeneral {
    //% color="#008800"
    //% block="comment: %dummy"
    //% block.loc.nl="uitleg: %dummy"
    //% dummy.defl="schrijf hier je uitleg"
    export function comment(dummy: string) {
    }

    //% block="wait %sec seconds"
    //% block.loc.nl="wacht %sec seconden"
    export function wait(sec: number) {
        basic.pause(1000)
    }
}

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    GROUP++
    if (GROUP > 9) GROUP = 1
    radio.setGroup(GROUP)
    basic.showNumber(GROUP)
    basic.pause(1000)
    if (displayHandler) displayHandler()
})
