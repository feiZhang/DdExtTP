<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/**
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See https://github.com/mrclay/minify/blob/master/docs/CustomServer.wiki.md for other ideas
 **/

$groupBasePath      = "/".substr($_SERVER["SCRIPT_NAME"],0,-14);

return array(
    'headerCss' => array(
        //$groupBasePath."/public/bootstrap/css/bootstrap-theme.css",
        //$groupBasePath."/public/bootstrap/css/bootstrap.css",  min无法压缩他。
        $groupBasePath."/basic/css/default.css",
    ),
    'headerJs' => array(
        $groupBasePath."/public/Jquery/jquery-3.1.1.js", //貌似太大，无法压缩
        $groupBasePath."/public/Jquery/jquery-migrate-3.0.0.js",
        $groupBasePath."/public/date.js",
        $groupBasePath."/public/bootstrap/js/bootstrap.js",
        $groupBasePath."/basic/js/selectselectselect.js"
    ),
    'footerCss' => array(
        $groupBasePath."/public/explain_prompt/example.css",
        $groupBasePath."/basic/js/explain_prompt/explain.imprompt.css",
        $groupBasePath."/public/artDialog5/skins/default.css",
        // $groupBasePath."/public/artDialog6/css/ui-dialog.css",
    ),
    'footerJs'  => array(
        $groupBasePath."/public/bgiframe/jquery.bgiframe.js",
        $groupBasePath."/public/artDialog5/source/jquery.artDialog.js",
        $groupBasePath."/public/artDialog5/source/artDialog.plugins.js",
        // $groupBasePath."/public/artDialog6/src/dialog.js",
        // $groupBasePath."/public/artDialog6/src/dialog.plus.js",
        $groupBasePath."/public/explain_prompt/jquery-impromptu.4.0.js",
        $groupBasePath."/basic/js/explain_prompt/explain.impromptu.js",
        $groupBasePath."/public/jquery-imgpreview.js",
        $groupBasePath."/public/respond.js",
        $groupBasePath."/basic/js/DxShowMessage.js",
        $groupBasePath."/basic/js/dxFunction.js",
        $groupBasePath."/public/angular.js",
        $groupBasePath."/basic/js/angular_ext.js",
        $groupBasePath."/basic/js/pop.js",
    ),
    'dataListCss'    => array(
        $groupBasePath."/public/sigma_grid/gt_grid.css",
        $groupBasePath."/public/sigma_grid/skin/default/skinstyle.css",
        $groupBasePath."/basic/css/sigma_grid.css",
        $groupBasePath."/public/validate/css/validationEngine.jquery.css",
        $groupBasePath."/public/umeditor1_2_2-utf8-php/themes/default/css/umeditor.css"
        ),
    'dataListJs'    => array(
        $groupBasePath."/public/sigma_grid/gt_msg_cn.js",
        $groupBasePath."/basic/js/DataOpe.js",
        $groupBasePath."/basic/js/dataope_ext.js",
        $groupBasePath."/public/validate/js/jquery.validationEngine.js",
        $groupBasePath."/public/validate/js/languages/jquery.validationEngine-zh_CN.js",
        $groupBasePath."/basic/js/validate.js",
    ),
    'dataEditJs'    => array(
        $groupBasePath."/public/validate/js/jquery.validationEngine.js",
        $groupBasePath."/public/validate/js/languages/jquery.validationEngine-zh_CN.js",
        $groupBasePath."/basic/js/validate.js",
        $groupBasePath."/public/jquery-upload-file/js/vendor/jquery.ui.widget.js",
        $groupBasePath."/public/jquery-upload-file/js/jquery.iframe-transport.js",
        $groupBasePath."/public/jquery-upload-file/js/jquery.fileupload.js",
        $groupBasePath."/public/jquery-upload-file/js/jquery.fileupload-fp.js",
        $groupBasePath."/public/jquery-upload-file/js/jquery.fileupload-ui.js",
        $groupBasePath."/public/json2.js",
    ),
);
