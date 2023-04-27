import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../lib/colors";
import { H1 } from "../../lib/typography";

export const ConnectSectionContainer = styled.div`
  text-align: center;
  margin-top: 20em;
  height: 30em;
  width: 70em;
  background-color: ${colors.PARCHMENT};
  margin: 0 auto;
  margin-top: 30em;
  border-radius: 60px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  padding-bottom: 4em;
  

`;

export const ConnectSectionTitle = styled(H1)`
  letter-spacing: 0.2rem;
  padding-top: 1.2em;
`;

export const ConnectBoxContainer = styled.div`
  width: 55em;
  height: 10em;
  background-color: ${colors.LIGHT_GREEN};
  border-radius: 100px;
  margin: 0 auto;
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
`;
export const SocialIcon = styled(motion.a)`
  color: ${colors.PARCHMENT};
  cursor: url("data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAA4AAAAYAAAAFwAAAA8AAAAIAAAABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABDAAAAbgAAAFgAAABHAAAAPwAAADgAAAArAAAAHwAAABUAAAAMAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BQIA/QEAAP4CAAD+AAAA/wAAAO0AAAC0AAAAeQAAAFcAAABJAAAARAAAADwAAAAvAAAAIQAAABUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAQUBAOUDAgP/NTAp/wUEA/8AAAD/AQEB/wAAAP8AAAD+AgEA+wUCAO4AAAC6AAAAeAAAAE4AAABJAAAAQQAAACcAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAcAAAA2AAAA/z86M//+8tT//evM/+LUuv+ViHT/QDkx/wkHBv8AAQD/AAAB/wEBAP4CAQD/AwEA+wAAAKkAAABOAAAAQgAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAMAAAAgAQAAsgIAAP8CAgL/rZmA///szf//6cn//+7L//7y0v/989j///jb//DnzP+cj3z/Pjcv/wUFBP8BAQD/BQIA/QAAAFkAAABEAAAAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQASAwAArwAAAP0CAAH/AwMC/4R7bf/+8tL//+rI///pyP//7Mr//+zL///uzf//6cv//+nK///nyf/+7Mv/9enR/xMTEP8BAQD9AAAAYAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAHAQBAO4AAAD+HxsX/4+Gcv/06ND//+/P///qyP//6Mb//+jG///oyP/+68///+vL///oyv//6c3//+fJ///nyP/z58r/BAQD/wAAAPoAAABNAAAARAAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAMCAADhAQEA/56Rgf//9Nv//ezR///rz///6cv//+bG///mxP//5sb//+fI///EfP//wHD//+G////v2P//5sj//+jI//vry/8KCQf/AQAA/wAAAGIAAABLAAAAKgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAQwEAAP8fHRn//vLb///s0v//69D//+nN///oy///5sf//+XJ///nyv//69L//4Ea//9ZAv//2Kn//+rT///myf//6Mr//urN/z87Nv8BAQD+AQAAsgAAAE0AAAA7AAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4XAAECAQChAAAA/nFtZ//+79j//+/W///r0v//6tD//+nO///nzP//6c3//+nP///u1///awH//2MA///s1v//7Nn//+nP///pzf//6c//6N3F/wAAAP8CAAD0AAAAUQAAAEEAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkBAQH/1NLP//746///8+L///Hd///w2v//7tj//+zX///s1f//7Nb//+XE//9jAf//hxP///Lm///t2f//69P//+rR///q0P/989v/HxsV/wEAAP4AAABgAAAAQQAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQAA8gEBAf/39/b///7+///99///+fP///ny///16///8uL///Hg///x4P//xYb//2MC//+5Z///9Of///Db///t1///7dT//+zS///y3f87NC7/AAAA/QAAAGEAAAA9AAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUBAAD/Gxsc//z8/P/AwcL/ZWJg//39/f//+/b///nz///79////f3///36//+QLP//YgH//9yy///36P//8d7///Db///v2P//7tf///nj/wsJCf8AAAD8AAAAXAAAADMAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwEBAP9UVVb//v39/1tdXf8tLS7//f38///////////////////26///8+X//24G//9uCP//9er///ft///15f//8+P///Th///04//38+j/AQEB/wAAAO8AAABNAAAAKAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA6REREf//////KCgo/4WGhv///////////////////////6pN//9oA///ZwD//4YY/////v///Pf///fu///26v//9un///bp/6Oem/8AAAH+AgAAzAAAAEcAAAAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAB2AQEB/lVVVf8GBgb/0tLS///////////////////+/v//tmH//3IN//9iAP//oTv//////////////v////79///8+P/++vT/Ly8s/wAAAP8AAACeAAAAQAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBAAIAAACyAQEB/xITE//6+vr////////////7+vn//P38/////v////7///fp///05f////////////////////////////n5+v8HBwf/AAAA/gAAAGkAAAA5AAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYBAQD/Ojo6/////////////v/+/6GhoP/b2tv///////7////v7u7/+Pf2////////////////////////////5+fo/wAAAP8AAADzAAAAVAAAACwAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdgEBAf57fH3//v7+///////6+/v/Ghsb/+fm5////////f39/1leWv/p6un////////////6+vr///////7+/v+ampv/AQEB/wAAANQAAABGAAAAHgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAC8AAAA/7+/wP////////////Pz8/8GBgb/+vn6///////8/Pv/IyUj//T08///////xMTE/2RhY//+//7//v7+/01NTv8BAQH/AAAAnAAAADUAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAPoEBAT/9PT0////////////zs3P/wEBAf/j4+T//////5udnP8BAQH/3t/g//7+/v9hYWL/DQ0N/8rKy//Q0dH/BgYG/wQBAP0AAAA+AAAAEQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAbAAAA/xERFP/+/v7///////7+/v9qamr/AQEB/wAAAP8GBgb/AAAA/wAAAP4AAAD/AAEB/wAAAP4AAAD+AAAA/gEAAP4BAADmAAAARAAAAAkAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAE4BAQD+Xl9g/////////////////xsbG/8AAAD/AQAA+gcEAPcCAQCiAAAAVggEANsEAgDwAQAAegAAADIAAAB9AAAAZiwFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAkwABAf3ExMX//v7+///////3+Pj/AAAA/wEAAPoAAABYAAAAMQEAAAQAAAAACAIAAQAAAAAAAAABAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAwDcAQEB//f39////////////7/Awf8AAAD/BwMA4wAAAEgAAAAgAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAACAcDAP8ODg7//f39///////+/v7/YGBh/wEBAf8AAACgAAAAQgAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAwAYAgEA/2VlZv////////////////8bGxv/AgEB/wAAAF8AAAA1AAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMCAAD/q6us////////////+fn5/wYGBv8CAADvAAAAQwAAAB4AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAOYbGxz//Pz8//////9+fn7/AQEB/QAAAKsAAAAjAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAMwAAAP8KCgr+DAwM/gEAAP8AAACxAAAAFQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAAIgAAACrAAAAPgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////8D///+AD///gAH//gAB//gAAf/wAAH/4AAB/+AAAP/AAAD/wAAA/8AAAP/AAAD/wAAA/8AAAP/gAAD/4AAB//AAAf/wAAH/4AAB/+AAA//gAAf/4AT//8A////AP///wD///8B////Af///wH///+D////z///8="),
    auto;
`;
