export default function examdetails({
    
    params
}: {
    params: {examid: string};
}

       

    ) {
    return (
     
      <center>
            <h1> exam name {params.examid}</h1>
      </center>
    );
  }