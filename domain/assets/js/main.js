var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function() {
            loaded();
        });
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", function() {
            loaded();
        });
    }

    function loaded() {

        setInterval(loop, 350);

    }

    var x = 0;

    var titleText = ["‎", "dxv3! "];

    function loop() {

        document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
    }

}