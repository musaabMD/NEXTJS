export default function quizdetails({
    
    params
}: {
    params: {quizid: string};
}

    ) {
    return (
     
      <center>
            <h1> quiz name {params.quizid}</h1>
      </center>
    );
  }