import {
  extendTheme,
  StyleFunctionProps,
  withDefaultColorScheme,
  withDefaultProps,
  type Theme,
  theme,
} from '@chakra-ui/react';
import _ from 'lodash';

const baseColorConfig = withDefaultProps({
  defaultProps: { colorScheme: 'red', focusBorderColor: 'green' },
});

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};
const shadows = {
  outline: '0 0 0 3px var(--chakra-colors-mycolor-500)',
};
// console.log(theme.components.Input.variants);
// console.log(defindePar);

const floatingLabel = {
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
//   Input: {
//     variants: {
//       outline: (props = {focusBorderColor : 'red.300'}) => ({
//         field: _.merge(theme, theme.components.Input.variants.outline(props), {
//           _focusVisible: {
//             zIndex: 1,
//             borderColor: 'red.500',
//             boxShadow: '0 0 0 1px',
//           },
//         }),
//       }),

//       // defaultProps?: {
//       //     size?: "md" | "xs" | "sm" | "lg" | undefined;
//       //     variant?: "outline" | "filled" | "unstyled" | "flushed" | undefined;
//       //     colorScheme?: string | undefined;
//       // } | undefined;
//     },
//   },
};
// const customInput: Theme = {
//     components: {
//         Input: {
//             variants: {
//                 outline: {

//                 }
//             }
//         }
//     }
// }

const obj1 = { a: 1, b: { c: 1, d: 1 } };
const obj2 = { b: { c: 2 } };
console.log(_.merge(obj1, obj2));
console.log(theme);
// console.log(theme.components.Input.variants.outline({theme: _.merge(theme, )}));



export { baseColorConfig, floatingLabel };
