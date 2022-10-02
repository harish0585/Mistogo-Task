export const styles = (theme) => ({
    testing: {
        height:'325px',
        marginTop:'-80px',
        ['@media (max-width: 1300px))']: { // eslint-disable-line no-useless-computed-key
            marginTop:"-80px"
          },
          ['@media (max-width: 1100px))']: { // eslint-disable-line no-useless-computed-key
            marginTop:"-80px"
          },
          ['@media (max-width: 1024px )']: { // eslint-disable-line no-useless-computed-key
            marginTop:"-80px"
          },
        ['@media (max-width: 768px )']: { // eslint-disable-line no-useless-computed-key
            marginTop:"0px"
          }
         
    }
})

