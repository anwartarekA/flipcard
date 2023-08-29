function maxDiff(list) {
    if(list.length == 1 || list.length == 0)
    return 0;
    else
    {
        let Max = Math.max(...list);
        let Min = Math.min(...list);
        return Max - Min;
    }
  }

  console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]));