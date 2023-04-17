import styled from 'styled-components';
import { colors } from './colors';
import { motion } from 'framer-motion';

const fonts = {
  questrial: 'Questrial, sans-serif',
};

const H1 = styled(motion.h1)`
  font-family: ${fonts.questrial};
  font-weight: ligher;
  color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
  font-size: 64px;
  margin: 0;
  font-weight: 300;
`;

const H2 = styled.h2`
  font-family: ${fonts.questrial};
  font-size: 32px;
  font-weight: 300;
  color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
`;

const H3 = styled.h3`
    font-family: ${fonts.questrial};
    font-size: 20px;
    color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
`;

const H4 = styled.h4`
    font-family: ${fonts.questrial};
    color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
`;

const P = styled.p`
    font-family: ${fonts.questrial};
    font-size: 18px;
    color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
`;

const StyledLink = styled(motion.a)`
   {
    text-decoration: none;
    color: ${(props): string => (props.color ? props.color : colors.DARK_GREEN)};
    font-family: ${fonts.questrial};
    transition: all 0.2s ease-in-out;
    cursor: url('data:image/x-icon;base64,AAACAAEAICAAAAAAAACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAA4AAAAYAAAAFwAAAA8AAAAIAAAABAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAABDAAAAbgAAAFgAAABHAAAAPwAAADgAAAArAAAAHwAAABUAAAAMAAAABQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/BQIA/QEAAP4CAAD+AAAA/wAAAO0AAAC0AAAAeQAAAFcAAABJAAAARAAAADwAAAAvAAAAIQAAABUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAQUBAOUDAgP/NTAp/wUEA/8AAAD/AQEB/wAAAP8AAAD+AgEA+wUCAO4AAAC6AAAAeAAAAE4AAABJAAAAQQAAACcAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAcAAAA2AAAA/z86M//+8tT//evM/+LUuv+ViHT/QDkx/wkHBv8AAQD/AAAB/wEBAP4CAQD/AwEA+wAAAKkAAABOAAAAQgAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAMAAAAgAQAAsgIAAP8CAgL/rZmA///szf//6cn//+7L//7y0v/989j///jb//DnzP+cj3z/Pjcv/wUFBP8BAQD/BQIA/QAAAFkAAABEAAAAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQASAwAArwAAAP0CAAH/AwMC/4R7bf/+8tL//+rI///pyP//7Mr//+zL///uzf//6cv//+nK///nyf/+7Mv/9enR/xMTEP8BAQD9AAAAYAAAAEAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAHAQBAO4AAAD+HxsX/4+Gcv/06ND//+/P///qyP//6Mb//+jG///oyP/+68///+vL///oyv//6c3//+fJ///nyP/z58r/BAQD/wAAAPoAAABNAAAARAAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAMCAADhAQEA/56Rgf//9Nv//ezR///rz///6cv//+bG///mxP//5sb//+fI///EfP//wHD//+G////v2P//5sj//+jI//vry/8KCQf/AQAA/wAAAGIAAABLAAAAKgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAQwEAAP8fHRn//vLb///s0v//69D//+nN///oy///5sf//+XJ///nyv//69L//4Ea//9ZAv//2Kn//+rT///myf//6Mr//urN/z87Nv8BAQD+AQAAsgAAAE0AAAA7AAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4XAAECAQChAAAA/nFtZ//+79j//+/W///r0v//6tD//+nO///nzP//6c3//+nP///u1///awH//2MA///s1v//7Nn//+nP///pzf//6c//6N3F/wAAAP8CAAD0AAAAUQAAAEEAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkBAQH/1NLP//746///8+L///Hd///w2v//7tj//+zX///s1f//7Nb//+XE//9jAf//hxP///Lm///t2f//69P//+rR///q0P/989v/HxsV/wEAAP4AAABgAAAAQQAAABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQAA8gEBAf/39/b///7+///99///+fP///ny///16///8uL///Hg///x4P//xYb//2MC//+5Z///9Of///Db///t1///7dT//+zS///y3f87NC7/AAAA/QAAAGEAAAA9AAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUBAAD/Gxsc//z8/P/AwcL/ZWJg//39/f//+/b///nz///79////f3///36//+QLP//YgH//9yy///36P//8d7///Db///v2P//7tf///nj/wsJCf8AAAD8AAAAXAAAADMAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwEBAP9UVVb//v39/1tdXf8tLS7//f38///////////////////26///8+X//24G//9uCP//9er///ft///15f//8+P///Th///04//38+j/AQEB/wAAAO8AAABNAAAAKAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA6REREf//////KCgo/4WGhv///////////////////////6pN//9oA///ZwD//4YY/////v///Pf///fu///26v//9un///bp/6Oem/8AAAH+AgAAzAAAAEcAAAAdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAB2AQEB/lVVVf8GBgb/0tLS///////////////////+/v//tmH//3IN//9iAP//oTv//////////////v////79///8+P/++vT/Ly8s/wAAAP8AAACeAAAAQAAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYBAAIAAACyAQEB/xITE//6+vr////////////7+vn//P38/////v////7///fp///05f////////////////////////////n5+v8HBwf/AAAA/gAAAGkAAAA5AAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYBAQD/Ojo6/////////////v/+/6GhoP/b2tv///////7////v7u7/+Pf2////////////////////////////5+fo/wAAAP8AAADzAAAAVAAAACwAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdgEBAf57fH3//v7+///////6+/v/Ghsb/+fm5////////f39/1leWv/p6un////////////6+vr///////7+/v+ampv/AQEB/wAAANQAAABGAAAAHgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAC8AAAA/7+/wP////////////Pz8/8GBgb/+vn6///////8/Pv/IyUj//T08///////xMTE/2RhY//+//7//v7+/01NTv8BAQH/AAAAnAAAADUAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAPoEBAT/9PT0////////////zs3P/wEBAf/j4+T//////5udnP8BAQH/3t/g//7+/v9hYWL/DQ0N/8rKy//Q0dH/BgYG/wQBAP0AAAA+AAAAEQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAbAAAA/xERFP/+/v7///////7+/v9qamr/AQEB/wAAAP8GBgb/AAAA/wAAAP4AAAD/AAEB/wAAAP4AAAD+AAAA/gEAAP4BAADmAAAARAAAAAkAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAE4BAQD+Xl9g/////////////////xsbG/8AAAD/AQAA+gcEAPcCAQCiAAAAVggEANsEAgDwAQAAegAAADIAAAB9AAAAZiwFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAkwABAf3ExMX//v7+///////3+Pj/AAAA/wEAAPoAAABYAAAAMQEAAAQAAAAACAIAAQAAAAAAAAABAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAwDcAQEB//f39////////////7/Awf8AAAD/BwMA4wAAAEgAAAAgAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAACAcDAP8ODg7//f39///////+/v7/YGBh/wEBAf8AAACgAAAAQgAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAwAYAgEA/2VlZv////////////////8bGxv/AgEB/wAAAF8AAAA1AAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMCAAD/q6us////////////+fn5/wYGBv8CAADvAAAAQwAAAB4AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAOYbGxz//Pz8//////9+fn7/AQEB/QAAAKsAAAAjAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAMwAAAP8KCgr+DAwM/gEAAP8AAACxAAAAFQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAAIgAAACrAAAAPgAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////8D///+AD///gAH//gAB//gAAf/wAAH/4AAB/+AAAP/AAAD/wAAA/8AAAP/AAAD/wAAA/8AAAP/gAAD/4AAB//AAAf/wAAH/4AAB/+AAA//gAAf/4AT//8A////AP///wD///8B////Af///wH///+D////z///8='), auto;
  }
`;

export { H1, H2, H3, H4, P, fonts, StyledLink };