import {useRouter} from 'next/router';
import dbdata from '../../db.json';

function Bank_Name() {
    // let s1={};
  let s1=useRouter();
  s1=s1.query.bank_name

    return (
        <div>
            inside bankname {s1}
        </div>
    );
}





export default Bank_Name;


export async function getStaticPaths() {
    const page_data=dbdata;
    const paths = page_data.bankname.map((item) => {
        return {
          params: {
            bank_name: `${item.bankname}`,
          },
        };
      });
    return {
        paths: paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    

    return {
        props:{
            data1:null
        }
    }
}