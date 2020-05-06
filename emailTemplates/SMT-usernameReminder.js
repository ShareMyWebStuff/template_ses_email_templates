// name           Dave
// websiteName    ShareMyTutoring
// usernames      DaveFromSurbiton
// htmlUsernames  DaveFromSurbiton


const usernameReminder = () => {

  const TEMPLATENAME = 'SMT_UsernameReminder';
  const SUBJECT_PART = 'Username reminder for {{websiteName}}';

  const TEXT_PART = "Dear {{name}},\n\n"+
  
  "You have received this email as there has been a request made to email the usernames associated with this email address.\n\n" +
  "If this request was not made by you then please ignore this email.\n\n" +

  "The usernames associated with this email address are:\n\n" +
  "{{usernames}}\n\n" +
  "Yours sincerely,\n" +
  "The ShareMyTutoring Crew"
  ;

  const HTML_PART = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
    `<html style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">\n` +
    ' <head> \n' +
    '  <meta charset="UTF-8"> \n' +
    '  <meta content="width=device-width, initial-scale=1" name="viewport"> \n' +
    '  <meta name="x-apple-disable-message-reformatting"> \n' +
    '  <meta http-equiv="X-UA-Compatible" content="IE=edge"> \n' +
    '  <meta content="telephone=no" name="format-detection"> \n' +
    '  <title>Username Reminder</title> \n' +
    '  <!--[if (mso 16)]>\n' +
    '    <style type="text/css">\n' +
    '    a {text-decoration: none;}\n' +
    '    </style>\n' +
    '    <![endif]--> \n' +
    '  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> \n' +
    '  <!--[if !mso]><!-- --> \n' +
    '  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> \n' +
    '  <!--<![endif]--> \n' +
    '  <style type="text/css">\n' +
    '@media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:17px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:left; line-height:120%!important } h3 { font-size:20px!important; text-align:left; line-height:120%!important } h1 a { font-size:30px!important; text-align:center } h2 a { font-size:20px!important; text-align:left } h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:17px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button { font-size:14px!important; display:inline-block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }\n' +
    '#outlook a {\n' +
    '\tpadding:0;\n' +
    '}\n' +
    '.ExternalClass {\n' +
    '\twidth:100%;\n' +
    '}\n' +
    '.ExternalClass,\n' +
    '.ExternalClass p,\n' +
    '.ExternalClass span,\n' +
    '.ExternalClass font,\n' +
    '.ExternalClass td,\n' +
    '.ExternalClass div {\n' +
    '\tline-height:100%;\n' +
    '}\n' +
    '.es-button {\n' +
    '\tmso-style-priority:100!important;\n' +
    '\ttext-decoration:none!important;\n' +
    '\ttransition:all 100ms ease-in;\n' +
    '}\n' +
    'a[x-apple-data-detectors] {\n' +
    '\tcolor:inherit!important;\n' +
    '\ttext-decoration:none!important;\n' +
    '\tfont-size:inherit!important;\n' +
    '\tfont-family:inherit!important;\n' +
    '\tfont-weight:inherit!important;\n' +
    '\tline-height:inherit!important;\n' +
    '}\n' +
    '.es-button:hover {\n' +
    '\tbackground:#555555!important;\n' +
    '\tborder-color:#555555!important;\n' +
    '}\n' +
    '.es-desk-hidden {\n' +
    '\tdisplay:none;\n' +
    '\tfloat:left;\n' +
    '\toverflow:hidden;\n' +
    '\twidth:0;\n' +
    '\tmax-height:0;\n' +
    '\tline-height:0;\n' +
    '\tmso-hide:all;\n' +
    '}\n' +
    '</style> \n' +
    ' </head> \n' +
    ` <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> \n` +
    '  <div class="es-wrapper-color" style="background-color:#F1F1F1;"> \n' +
    '   <!--[if gte mso 9]>\n' +
    '\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">\n' +
    '\t\t\t\t<v:fill type="tile" color="#f1f1f1"></v:fill>\n' +
    '\t\t\t</v:background>\n' +
    '\t\t<![endif]--> \n' +
    '   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> \n' +
    '     <tr style="border-collapse:collapse;"> \n' +
    '      <td valign="top" style="padding:0;Margin:0;"> \n' +
    '       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> \n' +
    '         <tr style="border-collapse:collapse;"> \n' +
    '          <td align="center" style="padding:0;Margin:0;"> \n' +
    '           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;" width="600" cellspacing="0" cellpadding="0" align="center"> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px;"> \n' +
    '               <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="282" valign="top"><![endif]--> \n' +
    '               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="282" align="left" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td class="es-infoblock es-m-txt-c" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;">Put your preheader text here</p></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table> \n' +
    '               <!--[if mso]></td><td width="20"></td><td width="278" valign="top"><![endif]--> \n' +
    '               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="278" align="left" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="right" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:14px;color:#CCCCCC;"><a href="https://sharemytutoring.com/" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC;">View in browser</a></p></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table> \n' +
    '               <!--[if mso]></td></tr></table><![endif]--></td> \n' +
    '             </tr> \n' +
    '           </table></td> \n' +
    '         </tr> \n' +
    '       </table> \n' +
    '       <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> \n' +
    '         <tr style="border-collapse:collapse;"> \n' +
    '          <td align="center" style="padding:0;Margin:0;"> \n' +
    '           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px;background-color:#628282;" bgcolor="#628282" align="left"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="left" style="padding:0;Margin:0;font-size:0px;"><a href="https://sharemytutoring.com/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:underline;color:#FFFFFF;"><img src="https://fduhmi.stripocdn.email/content/guids/CABINET_f64b2b8269950eab4f9166e5514239ea/images/32621585089846536.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="212"></a></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table></td> \n' +
    '             </tr> \n' +
    '           </table></td> \n' +
    '         </tr> \n' +
    '       </table> \n' +
    '       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> \n' +
    '         <tr style="border-collapse:collapse;"> \n' +
    '          <td align="center" style="padding:0;Margin:0;"> \n' +
    '           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;" width="600" cellspacing="0" cellpadding="0" bgcolor="#333333" align="center"> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;background-color:transparent;background-image:url(https://fduhmi.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png);background-repeat:no-repeat;background-position:center top;" align="left" bgcolor="transparent" background="https://fduhmi.stripocdn.email/content/guids/CABINET_85e4431b39e3c4492fca561009cef9b5/images/93491522393929597.png"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px;"><h1 style="Margin:0;line-height:30px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:25px;font-style:normal;font-weight:normal;color:#FFFFFF;">Username Reminder</h1></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table></td> \n' +
    '             </tr> \n' +
    '           </table></td> \n' +
    '         </tr> \n' +
    '       </table> \n' +
    '       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> \n' +
    '         <tr style="border-collapse:collapse;"> \n' +
    '          <td align="center" style="padding:0;Margin:0;"> \n' +
    '           <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td align="left" bgcolor="#628282" style="padding:0;Margin:0;padding-top:40px;padding-left:40px;padding-right:40px;background-color:#628282;"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="left" style="padding:0;Margin:0;padding-bottom:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#FFFFFF;"><br></p></td> \n` +
    '                     </tr> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#FFFFFF;">Dear {{name}},<br><br>You have received this email as there has been a request made to email the usernames associated with this email address.<br><br>If this request was not made by you then please ignore this email.<br><br>The usernames associated with this email address are:<br><br>{{htmlUsernames}}</p></td> \n` +
    '                     </tr> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="left" bgcolor="transparent" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:15px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:23px;color:#FFFFFF;">Yours sincerely,</p></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table></td> \n' +
    '             </tr> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td align="left" bgcolor="#628282" style="padding:0;Margin:0;padding-left:40px;padding-right:40px;background-color:#628282;"> \n' +
    '               <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="520" align="left" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="left" style="padding:0;Margin:0;padding-top:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#FFFFFF;">The ShareMyTutoring Crew</p></td> \n` +
    '                     </tr> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;"><br></p></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table></td> \n' +
    '             </tr> \n' +
    '           </table></td> \n' +
    '         </tr> \n' +
    '       </table> \n' +
    '       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> \n' +
    '         <tr style="border-collapse:collapse;"> \n' +
    '          <td align="center" style="padding:0;Margin:0;"> \n' +
    '           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#292828;" width="600" cellspacing="0" cellpadding="0" bgcolor="#292828" align="center"> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td align="left" bgcolor="#628282" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px;background-color:#628282;"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    '                      <td align="center" style="padding:0;Margin:0;font-size:0;"> \n' +
    '                       <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                         <tr style="border-collapse:collapse;"> \n' +
    '                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Facebook" src="https://fduhmi.stripocdn.email/content/assets/img/social-icons/rounded-colored/facebook-rounded-colored.png" alt="Fb" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> \n' +
    '                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Twitter" src="https://fduhmi.stripocdn.email/content/assets/img/social-icons/rounded-colored/twitter-rounded-colored.png" alt="Tw" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> \n' +
    '                          <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Instagram" src="https://fduhmi.stripocdn.email/content/assets/img/social-icons/rounded-colored/instagram-rounded-colored.png" alt="Inst" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> \n' +
    '                          <td valign="top" align="center" style="padding:0;Margin:0;"><img title="Linkedin" src="https://fduhmi.stripocdn.email/content/assets/img/social-icons/rounded-colored/linkedin-rounded-colored.png" alt="In" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> \n' +
    '                         </tr> \n' +
    '                       </table></td> \n' +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table></td> \n' +
    '             </tr> \n' +
    '           </table></td> \n' +
    '         </tr> \n' +
    '       </table> \n' +
    '       <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> \n' +
    '         <tr style="border-collapse:collapse;"> \n' +
    '          <td align="center" style="padding:0;Margin:0;"> \n' +
    '           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> \n' +
    '             <tr style="border-collapse:collapse;"> \n' +
    '              <td align="left" style="Margin:0;padding-top:40px;padding-bottom:40px;padding-left:40px;padding-right:40px;"> \n' +
    '               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                 <tr style="border-collapse:collapse;"> \n' +
    '                  <td width="520" valign="top" align="center" style="padding:0;Margin:0;"> \n' +
    '                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;">This email was sent to you from support@sharemytutoring.com</p></td> \n` +
    '                     </tr> \n' +
    '                     <tr style="border-collapse:collapse;"> \n' +
    `                      <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:18px;color:#666666;">Copyright © 2015-2020&nbsp;<strong>Cameron &amp; Guy Limited</strong>, All Rights Reserved.</p></td> \n` +
    '                     </tr> \n' +
    '                   </table></td> \n' +
    '                 </tr> \n' +
    '               </table></td> \n' +
    '             </tr> \n' +
    '           </table></td> \n' +
    '         </tr> \n' +
    '       </table></td> \n' +
    '     </tr> \n' +
    '   </table> \n' +
    '  </div>  \n' +
    ' </body>\n' +
    '</html>'


  
  return {
    templateName: TEMPLATENAME,
    subjectPart: SUBJECT_PART,
    htmlPart: HTML_PART,
    TextPart: TEXT_PART
  };
}

module.exports.usernameReminder = usernameReminder;
