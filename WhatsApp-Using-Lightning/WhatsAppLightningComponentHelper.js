({
    loadFeeds : function(component) {
        var action = component.get("c.getFeedItems");
        action.setCallback(this, function(a) {
            component.set("v.feeds", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
     
    whatsAppJS : function(component){
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
         
        jQuery('.whatsapp').click(function(){
            if( isMobile.any() ) {
                var text = jQuery(this).attr("data-text");
                var message = encodeURIComponent(text);
                var whatsapp_url = "whatsapp://send?text=" + message;
                window.location.href = whatsapp_url;
            } else {
                jQuery('#msg').show();
            }
        })
    }
})
