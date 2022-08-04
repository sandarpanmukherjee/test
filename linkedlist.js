class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        if(this.head == null){
            this.head = new Node(data);
            return;
        }

        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = new Node(data);
    }

    prepend(data){
        if(this.head == null){
            this.head = new Node(data);
            return;
        }
        let firstNode = new Node(data);
        firstNode.next = this.head;
        this.head = firstNode;
    }

    

    length(){
        if(this.head == null){
            return 0;
        }
        let counter = 1;
        let current = this.head;

        while(current.next != null){
            counter++;
            current=current.next;
        }
        return counter;
    }
    
    delete(data){
        if(this.head == null){
            return;
        }
        let current = this.head;

        
        if(current.value == data){
            this.head = current.next;
            return;
        }

        while(current.next.value != data)
        {    
            //console.log(current.value);
            current = current.next;
            if(current.next == null){
                return;
            }
           

        }
        current.next = current.next.next;
        }
    }


let list1 = new linkedList();
list1.append(6);
list1.append(8);
list1.prepend(100);
list1.append(10);
list1.append(14);
list1.delete(14);

let cur = list1.head;
while(cur != null){
console.log(cur.value);
cur = cur.next;
}