

export default function PageHeader({className, children, ...props}) {
   
   
    return (
        <div className={className}>
            <h1>{props.header}</h1>
            <p>{props.subHeader}</p>
        </div>
    );
  }