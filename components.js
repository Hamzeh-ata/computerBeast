    var sessionValue =sessionStorage.getItem('score');
    const page_title=document.getElementById("comp-header");
    const sugg4=document.getElementById("sugg-4");
    const sugg3=document.getElementById("sugg-3");
    const sugg2=document.getElementById("sugg-2");
    const sugg1=document.getElementById("sugg-1");

    const comp_p=document.getElementById("comp-p");
    const img=document.getElementById("comp_img");
   const next =document.getElementById("next");
   const prev =document.getElementById("prev");
   var variable = parseInt(sessionStorage.getItem("score"));


if(variable==1){
    prev.style.display="none";
}
else if(variable==8){
    next.style.display="none";
};
next.addEventListener("click",function(){
    sessionStorage.setItem("score", ++sessionValue);
});
prev.addEventListener("click",function(){
    sessionStorage.setItem("score", --sessionValue);
});
sugg4.addEventListener("click",function(){
    sessionStorage.setItem("score", 8);
});
sugg3.addEventListener("click",function(){
    sessionStorage.setItem("score", 6);
});
sugg2.addEventListener("click",function(){
    sessionStorage.setItem("score", 3);
});
sugg1.addEventListener("click",function(){
    sessionStorage.setItem("score", 4);
});
    if(sessionValue==1){
        page_title.innerHTML = "Motherboard ";
        comp_p.innerHTML= ` Alternatively referred to as the mb, mainboard, mboard, mobo,
        mobd, backplane board, base board, main circuit board, planar
        board, system board, or a logic board on Apple computers. The
        motherboard is a printed circuit board and foundation of a
        computer that is the biggest board in a computer chassis. It
        allocates power and allows communication to and between the CPU,
        RAM, and all other computer hardware components.
        <br>
        <br>
        Alternatively referred to as the mb, mainboard, mboard, mobo,
        mobd, backplane board, base board, main circuit board, planar
        board, system board, or a logic board on Apple computers. The
        motherboard is a printed circuit board and foundation of a
        computer that is the biggest board in a computer chassis. It
        allocates power and allows communication to and between the CPU,
        RAM, and all other computer hardware components.        
        `;
        img.src='./imgs/motherboard-deatils.png';
    }

    else if(sessionValue==2){
        page_title.innerHTML = "Hybrid hard drive (HHD) ";
        comp_p.innerHTML= `A hybrid hard drive (HHD), sometimes known as a solid-state hybrid drive (SSHD), is a mass storage device that combines a conventional hard disk drive (HDD) and a NAND flash module. An HHD blends the capacity, cost and performance of physical disk storage with the accelerated performance of flash
        Data that is frequently written to or retrieved from storage is served from flash memory. Seagate Technology, Toshiba Corp. and Western Digital Corp. offer variants of hybrid hard drive technology, typically branded using the SSHD moniker, for particularized consumer use in notebook computers and personal digital assistants.
        <br>
        <br>
        Hybrid hard drives attempt to bridge the gap between flash and fixed-disk Magnetic storage. SSDs are faster than traditional rotational media, but have much lower storage capacities than HDDs.
        
        `;
        img.src='./imgs/hard-diskdeatils.png';
    }
    else if(sessionValue==3){
        page_title.innerHTML = "Random-access memory ";
        comp_p.innerHTML= `RAM is volatile memory, which means that the information temporarily stored in the module is erased when you restart or shut down your computer. Because the information is stored electrically on transistors, when there is no electric current, the data disappears. Each time you request a file or information, it is retrieved either from the computer's storage disk or the internet. The data is stored in RAM, so each time you switch from one program or page to another, the information is instantly available. When the computer is shut down, the memory is cleared until the process begins again. Volatile memory can be changed, upgraded, or expanded easily by users
        <br>
        <br>
        Almost everything you do on a computer relies on it having sufficient memory. This includes actions ranging from moving your mouse cursor, which uses a minimal amount of RAM, to multitasking among multiple apps.        
        `;
        img.src='./imgs/ram.png';
    }
    else if(sessionValue==4){
        page_title.innerHTML = "Central processing unit";
        comp_p.innerHTML= `A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions in the program. This contrasts with external components such as main memory and I/O circuitry,[1] and specialized processors such as graphics processing units (GPUs). 
        <br>
        <br>
        The form, design, and implementation of CPUs have changed over time, but their fundamental operation remains almost unchanged. Principal components of a CPU include the arithmetic–logic unit (ALU) that performs arithmetic and logic operations, processor registers that supply operands to the ALU and store the results of ALU operations, and a control unit that orchestrates the fetching (from memory), decoding and execution of instructions by directing the coordinated operations of the ALU, registers and other components.         `;
        img.src='./imgs/cpu.png';
    }
    else if(sessionValue==5){
        page_title.innerHTML = "Power supply";
        comp_p.innerHTML= `A central processing unit (CPU), also called a central processor, main processor or just processor, is the electronic circuitry that executes instructions comprising a computer program. The CPU performs basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions in the program. This contrasts with external components such as main memory and I/O circuitry,[1] and specialized processors such as graphics processing units (GPUs). 
        <br>
        <br>
        The form, design, and implementation of CPUs have changed over time, but their fundamental operation remains almost unchanged. Principal components of a CPU include the arithmetic–logic unit (ALU) that performs arithmetic and logic operations, processor registers that supply operands to the ALU and store the results of ALU operations, and a control unit that orchestrates the fetching (from memory), decoding and execution of instructions by directing the coordinated operations of the ALU, registers and other components.         `;
        img.src='./imgs/powersp.png';
    }
    else if(sessionValue==6){
        page_title.innerHTML = "Graphics Card";
        comp_p.innerHTML= `The graphics processing unit (GPU), which is also called the graphics card or video card, is a very important part of a gaming system. And for some graphics-intensive applications, it may be more important than the central processing unit (CPU), which is often referred to as the brain (or heart) of a computer.
        The GPU performs rapid math calculations while freeing the CPU to perform other tasks. It speeds the process of creating and rendering images, animations, and video. 
        <br>
        <br>
        Two types of GPUs exist, integrated (or embedded) GPUs that reside on and share memory directly with the CPU, and discrete GPUs that have their own memory on their own card. `;
        img.src='./imgs/gtx.png';
    }
    else if(sessionValue==7){
        page_title.innerHTML = "Solid-state drive";
        comp_p.innerHTML= `SSDs got their name—solid state—because they use solidstate devices under the hood. In an SSD, all data is stored in integrated circuits. This difference from HDDs has a lot of implications, especially in size and performance. Without the need for a spinning disk, SSDs can reduce to the shape and size of a stick of gum (what’s known as the M.2 form factor) or even as small as a postage stamp. Their capacity—or how much data they can hold—varies, making them flexible for smaller devices, such as slim laptops, convertibles, or 2 in 1s. And SSDs dramatically reduce access time since users don’t have to wait for platter rotation to start up. 
        <br>
        <br>
        SSDs are more expensive than HDDs per amount of storage (in gigabytes (GB) and terabytes (TB)), but the gap is closing as SSD prices decline at a faster pace that HDD prices year over year. `;
        img.src='./imgs/ssd-deatils.png';
    }
    else if(sessionValue==8){
        page_title.innerHTML = "Sound card";
        comp_p.innerHTML= `Alternatively referred to as an audio output device, sound board, or audio card. A sound card is an expansion card or IC for producing sound on a computer that can be heard through speakers or headphones. Although the computer doesn't need a sound card, it's included on every machine as either in an expansion slot (shown below) or built into the motherboard (onboard). 
        <br>
        <br>
        Usually, the cables connecting to the devices are also color-coded, and will match or be close to the colors the cables connect to. For example, the end of the speakers cable may have a green line or be completely green. `;
        img.src='./imgs/soundcard2.png';
        
    };

